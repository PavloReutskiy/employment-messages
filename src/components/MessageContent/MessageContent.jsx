import './MessageContent.css';
import messages from '../../data/messages.json';

export const MessageContent = ({ formData, language, messageType }) => {
  const messageData = messages[messageType][language];

  const dataWithReplacements = {
    ...formData,
    platform: formData.platform === "other" ? formData.otherPlatform : formData.platform,
    mainTechString: formData.mainTech.join(', '),
    additionalTechString: formData.otherTech 
      ? `${formData.additionalTech.join(', ')}, ${formData.otherTech}`
      : formData.additionalTech.join(', ')
  };

  const replaceTokens = (text, dataWithReplacements) => {
    return text.replace(/\{(.*?)\}/g, (match, token) => {
      return dataWithReplacements[token] || match;
    });
  };

  const renderContent = (content) => {
    return content.map((item) => {
      if (typeof item === 'string') {
        return replaceTokens(item, dataWithReplacements);
      }

      const addedClass = item.className ? item.className : '';

      switch (item.type) {
        case 'paragraph':
          return (
            <p key={item.id} className={addedClass}>
              {Array.isArray(item.content) 
                ? renderContent(item.content) 
                : replaceTokens(item.content, dataWithReplacements)
              }
            </p>
          );
        case 'list':
          return (
            <ul key={item.id} className={addedClass}>
              {item.items.map((listItem) => (
                <li key={listItem.id}>{renderContent(listItem.content)}</li>
              ))}
            </ul>
          );
        case 'listItem':
          return renderContent(item.content);
        case 'link':
          return (
            <a 
              href={item.url} 
              key={item.id} 
              className={addedClass} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          );
        case 'text':
          return (
            <span 
              key={item.id} 
              className={addedClass} 
              style={item.style === 'bold' ? { fontWeight: 'bold' } : undefined}
            >
              {replaceTokens(item.text, dataWithReplacements)}
            </span>
          );
        default:
          return null;
      }
    });
  };

  return (
    <>{renderContent(messageData)}</>
  );
}