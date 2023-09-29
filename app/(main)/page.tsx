
import { intialProfile } from "@/lib/setInitialProfile";
import Navbar from "@/components/navbar/Navbar";

const SetupPage = async () => {
  const profile = await intialProfile();

  return <></>;
}
 
export default SetupPage;