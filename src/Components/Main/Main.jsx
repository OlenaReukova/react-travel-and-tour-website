import React from "react";
import "./main.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
const Data = [
  {
    id: 1,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 2,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 3,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 4,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 5,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 6,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 7,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 8,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
  {
    id: 9,
    imgSrc:
      "https://images.pexels.com/photos/11434413/pexels-photo-11434413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "the epitome of romance, Bora Bora is one of the best travel destinations in the World.This Place is Known for its luxurius stays and adventurous acticities.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map((dest) => {
          return (
            <div className="singleDestination">
              <div className="imageDiv">
                <img src={dest.imgSrc} alt="" />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{dest.destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{dest.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {dest.grade}
                      <small>+1</small>
                    </span>
                  </div>
                  <div className="price">
                    <h5>{dest.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{dest.description}</p>
                </div>
                <button className="btn flex">
                  DETAILS
                  <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Main;
