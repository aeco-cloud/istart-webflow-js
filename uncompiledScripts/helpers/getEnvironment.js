export default function getEnvironment() {
  const regex = new RegExp(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/i);
  const subdomain = regex.exec(window.location.href)[0];

  let environment = "production";
  if (subdomain.includes("local")) {
    environment = "local";
  } else if (subdomain.includes("develop")) {
    environment = "develop";
  } else {
    environment = "production";
  }

  console.log("environment: ", environment)
  return environment;
}
