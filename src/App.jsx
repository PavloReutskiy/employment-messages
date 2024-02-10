import "./App.css";
import { useState } from "react";
import { FormComponent } from "./components/FormComponent";
import { MessageBlock } from "./components/MessageBlock";
import { MessageCard } from "./components/MessageCard";
import { MessageContent } from "./components/MessageContent/MessageContent";

const App = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    recruiterName: "",
    vacancyTitle: "",
    introduce: "Full Stack",
    platform: "",
    otherPlatform: "",
    mainTech: ["JavaScript"],
    additionalTech: [],
    otherTech: "",
  });

  const handleFormDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  return (
    <div className="App">
      <h1 className="heading-1">Message Template</h1>
      <FormComponent
        formData={formData}
        onFormDataChange={handleFormDataChange}
      />
      <MessageBlock title="Cover letter">
        <MessageCard title="Cover letter">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="coverLetter"
          />
        </MessageCard>
        <MessageCard title="Cover letter">
          <MessageContent
            formData={formData}
            language="en"
            messageType="coverLetter"
          />
        </MessageCard>
      </MessageBlock>

      <MessageBlock title="Telegram - cover letter">
        <MessageCard title="Telegram - cover letter">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="telegramCoverLetter"
          />
        </MessageCard>
        <MessageCard title="Telegram - cover letter">
          <MessageContent
            formData={formData}
            language="en"
            messageType="telegramCoverLetter"
          />
        </MessageCard>
      </MessageBlock>

      <MessageBlock title="LinkedIn - cover letter, front-end">
        <MessageCard title="LinkedIn - cover letter">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="linkedInCoverLetterFrontEnd"
          />
        </MessageCard>
        <MessageCard title="LinkedIn - cover letter">
          <MessageContent
            formData={formData}
            language="en"
            messageType="linkedInCoverLetterFrontEnd"
          />
        </MessageCard>
      </MessageBlock>

      <MessageBlock title="LinkedIn - cover letter, back-end">
        <MessageCard title="LinkedIn - cover letter">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="linkedInCoverLetterBackEnd"
          />
        </MessageCard>
        <MessageCard title="LinkedIn - cover letter">
          <MessageContent
            formData={formData}
            language="en"
            messageType="linkedInCoverLetterBackEnd"
          />
        </MessageCard>
      </MessageBlock>

      <MessageBlock title="E-mail, Telegram - cold contact">
        <MessageCard title="E-mail, Telegram - cold contact">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="coldContactEmail"
          />
        </MessageCard>
        <MessageCard title="E-mail, Telegram - cold contact">
          <MessageContent
            formData={formData}
            language="en"
            messageType="coldContactEmail"
          />
        </MessageCard>
      </MessageBlock>

      <MessageBlock title="LinkedIn - cold contact">
        <MessageCard title="LinkedIn - cold contact">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="linkedInColdContact"
          />
        </MessageCard>
        <MessageCard title="LinkedIn - cold contact">
          <MessageContent
            formData={formData}
            language="en"
            messageType="linkedInColdContact"
          />
        </MessageCard>
      </MessageBlock>

      <MessageBlock title="LinkedIn - cold contact, recruiter-freelancer">
        <MessageCard title="LinkedIn - cold contact">
          <MessageContent
            formData={formData}
            language="ua"
            messageType="linkedInColdContactFreelancer"
          />
        </MessageCard>
        <MessageCard title="LinkedIn - cold contact">
          <MessageContent
            formData={formData}
            language="en"
            messageType="linkedInColdContactFreelancer"
          />
        </MessageCard>
      </MessageBlock>
    </div>
  );
};

export default App;
