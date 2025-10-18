// vCard generator
export function generateVCard(data) {
  let vcf = `
BEGIN:VCARD
VERSION:3.0
FN:${data.fullName || ""}
ORG:${data.company || ""}
TITLE:${data.jobTitle || ""}
TEL;TYPE=cell:${data.phone || ""}
EMAIL;TYPE=internet:${data.email || ""}
URL:${data.website || ""}
ADR:${data.address || ""}
`;
  if(data.facebook) vcf += `X-SOCIALPROFILE;type=facebook:${data.facebook}\n`;
  if(data.instagram) vcf += `X-SOCIALPROFILE;type=instagram:${data.instagram}\n`;
  if(data.linkedin) vcf += `X-SOCIALPROFILE;type=linkedin:${data.linkedin}\n`;
  if(data.twitter) vcf += `X-SOCIALPROFILE;type=twitter:${data.twitter}\n`;
  vcf += `END:VCARD`;
  return vcf;
}