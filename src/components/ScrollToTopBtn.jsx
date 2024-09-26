import React, { useEffect, useState } from 'react';
import '../styles/scrollToTopBtn.css';
import { ReactComponent as ArrowWhite } from "../assets/arrow-up-white.svg";

export default function ScrollToTopBtn() {
  // show text on hover
	const [showBTT, setShowBTT] = useState(false);
	const handleMouseOver = () => {
		setShowBTT(true);
	}
	const handleMouseOut = () => {
		setShowBTT(false);
	}

	// add scroll to top feature
	const [displayArrow, setDisplayArrow] = useState(false);

	const scrollUp = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const listenToScroll = () => {
		if (
			document.body.scrollTop > 50 ||
			document.documentElement.scrollTop > 50
		) {
			setDisplayArrow(true);
		} else {
			setDisplayArrow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenToScroll);
		return () => window.removeEventListener("scroll", listenToScroll);
	}, []);

  return (
    <div>
        {displayArrow && (
            <div id='da-wrapper' onClick={scrollUp} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div id='arrow'>
                    <ArrowWhite />
                </div>
                <div id='arrow-text' className={showBTT ? "md-block" : "hidden"}>
                    Back to Top
                </div>
            </div>
        )}
    </div>
  )
}
