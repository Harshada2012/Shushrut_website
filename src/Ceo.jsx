import React from "react";
import "./Ceo.css";
import { FaArrowRight } from "react-icons/fa";

export default function Ceo() {
    return (
        <div className="ceo-card">

            <div className="ceo-img-wrapper">
                <img
                    src="/members_icon/ceo.jpeg"
                    alt="CEO"
                    className="ceo-img"
                />
            </div>

            <div className="ceo-content">
                <h1 className="ceo-name">Mr. Padmabhushan Deshpande</h1>
                <h3 className="ceo-role">Chief Executive Officer</h3>

                <p className="ceo-desc">
                    Padmabhushan Deshpande is the Founder Director of Shushrut Systems and brings over 25 years of extensive experience in the healthcare sector. With deep domain knowledge and remarkable expertise, he is well-prepared to set new goals and drive innovation in healthcare. His vast experience and insights are certain to benefit the healthcare industry significantly.
                </p>

            </div>

        </div>
    );
}