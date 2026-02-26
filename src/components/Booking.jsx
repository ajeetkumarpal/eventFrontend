import axios from "axios";
import React, { useEffect, useState } from "react";
import backendUrl from "../api";

const Booking = () => {
  const [participateEvent, setParticipateEvent] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(backendUrl + "/event/booking", {
        withCredentials: true,
      });
      console.log(response.data);
      setParticipateEvent(
        [
          ...response.data.weddingData,
          ...response.data.birthdayData,
          ...response.data.concertData,
          ...response.data.sportData,
          ...response.data.culturalData,
        ].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
      );
    } catch (err) {
      console.log("Error fetching data:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(participateEvent);
  if (participateEvent.length <= 0) {
    return (
      <p className="text-2xl text-amber-100 pt-32 pb-96 text-center font-semibold">
        No Booking Yet
      </p>
    );
  }
  return (
    <div className="py-5 mt-20 mx-6 md:mx-16">
      <h1 className="text-2xl px-2.5 font-semibold mb-5 text-center  text-white">
        Event Booked
      </h1>

      <div className="space-y-4 px-2.5">
        {participateEvent.map((event) => (
          <div
            key={event._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm px-6 py-4 flex flex-wrap gap-6 text-sm text-gray-700 items-start hover:shadow-md transition"
          >
            {/* Event Name - Left aligned */}
            <span className="font-semibold text-gray-900 min-w-37.5">
              {event.eventName}
            </span>

            {/* Fields Container - Flex wrap for alignment */}
            <div className="flex flex-wrap gap-6 flex-1">
              {/* Amount Field */}
              {event.amount && (
                <span className="min-w-28">
                  <span className="font-medium">Amount:</span> ₹{event.amount}
                </span>
              )}

              {/* Date Field - Show only if date exists */}
              {event.date && (
                <span className="min-w-25">
                  <span className="font-medium">Date:</span> {event.date}
                </span>
              )}
              {/* Time Field */}
              {event.time && (
                <span className="min-w-25">
                  <span className="font-medium">Time:</span> {event.time}
                </span>
              )}

              {/* Guest Field - Show "Guest" if no date, otherwise show guests count */}
              {!event.date && event.guests ? (
                <span className="min-w-25">
                  <span className="font-medium">Guest:</span> {event.guests}
                </span>
              ) : (
                event.guests && (
                  <span className="min-w-25">
                    <span className="font-medium">Guests:</span> {event.guests}
                  </span>
                )
              )}

              {/* Package Field */}
              {event.package && (
                <span className="min-w-28">
                  <span className="font-medium">Package:</span> {event.package}
                </span>
              )}

              {/* Team Name Field */}
              {event.teamName && (
                <span className="min-w-25">
                  <span className="font-medium">Team:</span> {event.teamName}
                </span>
              )}

              {/* No of Ticket Field */}
              {event.noOfTicket && (
                <span className="min-w-25">
                  <span className="font-medium">No of Ticket:</span>{" "}
                  {event.noOfTicket}
                </span>
              )}
            </div>

            {/* Created At - Right aligned */}
            <span className="text-gray-500 ml-auto whitespace-nowrap">
              {new Date(event.createdAt).toLocaleDateString("en-IN")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Booking;
