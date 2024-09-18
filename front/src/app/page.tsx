import Navbar from "@/components/base/Navbar";
import HeroSection from "@/components/base/HeroSection";
import FeatureSection from "@/components/base/FeatureSection";
import UserReviews from "@/components/base/UserReviews.";
import Footer from "@/components/base/Footer";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/options";

export default async function LandingPage() {
  const session= await getServerSession(authOption)
  
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Header */}
      <Navbar user ={session?.user}/>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeatureSection />

      {/* User Reviews Section */}
      <UserReviews />

      {/* Footer */}
      {/* <Footer /> */}
      <Footer></Footer>
    </div>
  );
}