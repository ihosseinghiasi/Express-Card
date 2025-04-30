import IEmailTemplate from "../interface/emailTemplate.interface";
export const replaceEmailTemplatePatterns = (
  userName: string,
  emailTemplate: IEmailTemplate,
  fields: { fieldName: string; fieldValue: string }[]
): Promise<{ emailSubject: string; emailDescription: string }> => {
  let fieldsDetail: string = "";
  if (fields) {
    fields.forEach((field) => {
      fieldsDetail += `${field.fieldName} : ${field.fieldValue}<br>`;
    });
  }
  const emailSubject: string = emailTemplate.title
    .replace("%%site_title%%", " اکسپرس کارت ")
    .replace("%%user_name%%", userName)
    .replace("%%sell_fields%%", fieldsDetail);
  const emailDescription: string = emailTemplate.description
    .replace("%%user_name%%", userName)
    .replace("%%site_title%%", " اکسپرس کارت ")
    .replace("%%sell_fields%%", fieldsDetail);

  return Promise.resolve({ emailSubject, emailDescription });
};
