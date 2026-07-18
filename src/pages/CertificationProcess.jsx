import CertificationBanner from "../components/CertificationProcess/CertificationBanner/CertificationBanner";
import CertificationAbout from "../components/CertificationProcess/CertificationAbout/CertificationAbout";
import Benefits from "../components/CertificationProcess/CertificationBenefits/CertificationBenefits";
function CertificationPage() {
  return (
    <div className="CertificationBanner-page">
      <CertificationBanner />
    <CertificationAbout />
<Benefits />
    </div>
  );
}

export default CertificationPage;
