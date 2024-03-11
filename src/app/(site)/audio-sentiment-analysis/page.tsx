import AudioAnalyse from "@/components/Audio";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us | AOSA - Audio Sentiment Analysis on Afan Oromo",
  description: "This is About page description",
};

const AudioAnalysePage = () => {
  return (
    <main>
      <Breadcrumb pageName="Sentiment Analysis Page" />
      <AudioAnalyse />
      <Team />
    </main>
  );
};

export default AudioAnalysePage;
