import React from "react";
import { FaQuestion } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
      <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-200 sm:mx-auto sm:w-24 sm:h-24">
            <FaQuestion className="text-5xl"></FaQuestion>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            What actually are Professional Ethics?
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            Ethics denotes human behavior to make decisions between what is
            truthful and what is not. Professional ethics are those set code or
            moral principles that govern a person's behavior in a professional
            workplace or work life. In the legal profession, an advocate must
            obey professional codes for fair dealing with the client and
            maintain and uphold the self-possession.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-200 sm:mx-auto sm:w-24 sm:h-24">
            <FaQuestion className="text-5xl"></FaQuestion>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Importance of Ethics for Advocates
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            The code of conduct in any profession is important, and perhaps the
            most pressing in the legal profession where lawyers are particularly
            viewed with suspicion. Compulsory conduct is therefore essential in
            ensuring the integrity of employees and the legal system as a whole.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-200 sm:mx-auto sm:w-24 sm:h-24">
            <FaQuestion className="text-5xl"></FaQuestion>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            Need for Professional Ethics
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            The American Bar Association Committee has well explained the
            necessity of the code of legal ethics. It is evident that the legal
            profession is actually the keystone of the arch of Government. If it
            is weak, then it is allowed to be the subject of corruption again
            the destructive influence of those, who are controlled by art, greed
            or profit or otherwise wrong motive, sooner or later the arch should
            collapse.
          </p>
        </div>
        <div className="max-w-md sm:mx-auto sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-yellow-200 sm:mx-auto sm:w-24 sm:h-24">
            <FaQuestion className="text-5xl"></FaQuestion>
          </div>
          <h6 className="mb-3 text-xl font-bold leading-5">
            The Bar Council Rules
          </h6>
          <p className="mb-3 text-sm text-gray-900">
            At the time of his trial and while he was serving in court, an
            advocate must act in a dignified manner. However, whenever there is
            a valid reason for a serious complaint against a judicial officer,
            an advocate has the right and duty to bring his or her complaint to
            the appropriate authorities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
