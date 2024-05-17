import "./HomePage.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="main-img">
        <Link to={`/items`}>
          <img src="https://digital.michaelkors.com/refreshes/2024/spring/refresh3/global/desktop/collection/COLLECTION_2.jpg" alt="" />
        </Link>
      </div>
      <div className="img-group">
        <img src="https://coach.scene7.com/is/image/Coach/ct383_clu_a0?$desktopProduct$" alt="" />
        <img src="https://cms.coachoutlet.com/i/coachoutlet/20240509-cs-coachtopia-wavy-baguette-img.png?w=320&fmt=webp&$promo-tile-banner-50-50-desktop-2up$" alt="" />
        <img src="https://cms.coach.com/i/coach/24RT_MAR_T3_GR3B_RGB_HR300_573X458?&w=640&fmt=webp&$qlt_med$" alt="" />
        <img src="https://cms.coach.com/i/coach/0415-nav-spot3?&w=640&fmt=webp&$qlt_med$" alt="" />
      </div>     
    </div>
  );
}