import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
    const [message, setMessage] = useState("");
  const [landlord, setLandlord] = useState(null);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

    const onChange = (e) => {
        setMessage(e.target.value);
    }
  return (
    <>
      {landlord && (
        <div className="flex flex-col">
          <p>
            Contact <span className="font-semibold">{landlord.username}</span> for <span className="font-semibold">
            {listing.name.toLowerCase()}</span>
          </p>
          <textarea name="message" id="message" cols="30" rows="2" value={message}
          onChange={onChange} placeholder="Enter your message here..."
          className="border w-full p-3 rounded-lg">

          </textarea>
          <Link to={`mailto:${landlord.email}?subject=Regarding ${listing.name}
          &body=${message}`}
          className="bg-slate-700 text-white text-center -3 rounded-lg uppercase hover:opacity-80">
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}
