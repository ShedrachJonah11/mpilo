"use client";
import React, { useState } from "react";
import { Avatar, Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import check from "../public/check.svg";
import { motion, useScroll } from "framer-motion";
import trust from "../public/Clip path group.svg";
import check2 from "../public/simple-line-icons_check.svg";
import bot from "../public/bot.svg";
import phone1 from "../public/Personal Chat1.svg";
import phone2 from "../public/Personal Chat2.svg";
import stars from "../public/stars.svg";
import hipaa from "../public/HIPAA-square-logo 1.svg";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        duration: 0.5,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  const [activeTab, setActiveTab] = useState("MONTHLY");

  return (
    <div>
      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-bl from-[#7B11F9] via-[#7922D8] to-[#3636B2]">
        <div className="flex flex-col justify-center p-2 md:p-56  items-center h-full">
          <motion.h4
            variants={container}
            viewport={{ once: false }}
            transition={{ delay: 1 }}
            initial="hidden"
            whileInView="show"
            className="text-white text-xl md:text-2xl mb-4 font-light mt-24"
          >
            Your AI medical scribe
          </motion.h4>

          <motion.h1
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.8 }}
            viewport={{ once: false }}
            className="text-white text-4xl md:text-6xl mb-6 text-center font-bold"
          >
            Experience the future of healthcare documentation with Mpilo
          </motion.h1>
          <motion.p
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.9 }}
            viewport={{ once: false }}
            className="text-gray-400 mb-6 font-light md:w-[900px] text-sm md:text-xl text-center"
          >
            Mpilo is an innovative scribing assistant, specifically designed to
            revolutionize the way healthcare professionals create SOAP notes
            during consultations.
          </motion.p>
          <Button
            size="lg"
            className="text-white px-8 py-4 md:px-16 md:py-6 bg-[#F74D4D]"
          >
            Try for Free
          </Button>

          <p className="mt-4 text-white font-light text-sm">
            [HIPPA Compliant]
          </p>

          <div className="flex flex-col mt-20 md:flex-row md:mt-44 md:gap-20 space-y-8 md:space-y-0">
            <div className="flex items-center">
              <Image src={check} alt="check" className="mr-4" />
              <p className="text-white text-lg md:text-xl">
                Easy to use in your web browser
              </p>
            </div>
            <div className="flex items-center">
              <Image src={check} alt="check" className="mr-4" />
              <p className="text-white text-lg md:text-xl">
                AI medical scribing tool
              </p>
            </div>
            <div className="flex items-center">
              <Image src={check} alt="check" className="mr-4" />
              <p className="text-white text-lg md:text-xl">No data stored</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Patner */}
      <section>
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.9 }}
              viewport={{ once: false }}
              className="text-center text-2xl md:text-4xl p-20 font-semibold md:w-[900px]"
            >
              Your trusted partner in modern healthcare documentation.
            </motion.h1>
          </div>

          {/* First div */}
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.9 }}
            viewport={{ once: false }}
            className="flex flex-col md:flex-row p-4 space-x-6 md:space-x-56 justify-center"
          >
            <div className="">
              <p className="text-[#F74D4D] mb-4">Efficiency Multiplied</p>
              <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                Streamline Your Documentation with Flawless AI SOAP Notes
              </h1>
              <p className="text-sm font-light mb-10 md:max-w-[600px]">
                Reclaim Hours with Your Trusted Clinical Partner. Keep Patient
                Engagement Intact While Crafting Impeccable Notes.
              </p>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-20 md:mt-0">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Transcribe Your Patient&apos;s Visit Dialogue
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 mt-10">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Utilize Confidential Notes
                  </p>
                </div>
              </div>
            </div>
            <div className="ml-0 mt-4 md:mt-0 md:ml-8 hidden md:block">
              <Image src={trust} alt="" />
            </div>
          </motion.div>
        </div>
      </section>
      <section>
        {/* Second div */}
        <div className="mt-8 md:mt-52">
          <motion.div
            variants={{
              hidden: { y: 60, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "linear", delay: 0.9 }}
            viewport={{ once: false }}
            className="flex flex-col md:flex-row space-x-6 md:space-x-96 justify-center"
          >
            <div className="md:ml-8 hidden md:block">
              <Image src={bot} alt="" />
            </div>
            <div className="">
              <p className="text-[#F74D4D] mb-4">Efficiency Multiplied</p>
              <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                Streamline Your Documentation with Flawless AI SOAP Notes
              </h1>
              <p className="text-sm font-light mb-10 md:max-w-[600px]">
                Reclaim Hours with Your Trusted Clinical Partner. Keep Patient
                Engagement Intact While Crafting Impeccable Notes.
              </p>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10 mt-20 md:mt-0">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Transcribe Your Patient&apos;s Visit Dialogue
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 mt-10">
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Craft Visit Summaries Effortlessly
                  </p>
                </div>
                <div className="flex gap-2">
                  <Image src={check2} alt="" />
                  <p className="font-light text-md">
                    Utilize Confidential Notes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-10 md:py-20 px-4 md:px-32">
        <div className="mx-auto max-w-xl md:max-w-none">
          <h1 className="text-2xl md:text-4xl font-semibold">Testimonial</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 mt-20">
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.9 }}
              viewport={{ once: false }}
              className="flex flex-col"
            >
              <Card className="bg-blue-100 flex-1">
                <CardBody className="flex flex-col md:flex-row items-center flex-1">
                  <div className="mb-4 md:mb-0 md:mr-4">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                  </div>
                  <div>
                    <h1>John Doe</h1>
                    <Image src={stars} alt="" />
                    <p>
                      These guys are incredible to work with. Like seriously!
                      They did everything so good, that I did not even imagine
                      it would come up this awesome! Really looking forward to
                      working with them again.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
            {/* Second Card */}

            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.9 }}
              viewport={{ once: false }}
              className="flex flex-col"
            >
              <Card className="bg-blue-100 flex-1">
                <CardBody className="flex flex-col md:flex-row items-center flex-1">
                  <div className="mb-4 md:mb-0 md:mr-4">
                    <Avatar src="https://i.pravatar.cc/150?u=anotheruser" />
                  </div>
                  <div>
                    <h1>Jane Smith</h1>
                    <Image src={stars} alt="" />
                    <p>
                      Absolutely amazing experience working with this team.
                      Their professionalism and dedication are unmatched. Highly
                      recommend!
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why choose mpilo */}
      <div>
        <section>
          <div className="">
            <div className="flex flex-col justify-center items-center">
              <motion.h1
                variants={{
                  hidden: { y: 60, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ ease: "linear", delay: 0.9 }}
                viewport={{ once: false }}
                className="text-center text-2xl md:text-4xl p-20 font-semibold md:w-[900px]"
              >
                Why Choose mpilo
              </motion.h1>
            </div>

            {/* First div */}
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.9 }}
              viewport={{ once: false }}
              className="flex flex-col md:flex-row p-4 space-x-6 md:space-x-56 justify-center items-center"
            >
              <div className="">
                <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                  Efficiency
                </h1>
                <p className="text-sm font-light mb-10 md:max-w-[600px]">
                  Say goodbye to tedious manual documentation. Mpilo automates
                  the documentation process, allowing you to focus on patient
                  care.
                </p>
                <p className="text-sm font-light mb-10 md:max-w-[600px]">
                  Reclaim 60% of your day from documentation tasks; focus on
                  what truly matters.
                </p>

                <Button className="bg-[#F74D4D] px-10 text-white">
                  Try For Free
                </Button>
              </div>
              <div className="ml-0 mt-4 md:mt-0 md:ml-8 hidden md:block">
                <Image src={phone1} alt="" />
              </div>
            </motion.div>
          </div>
        </section>
        <section>
          {/* Second div */}
          <div className="mt-8 md:mt-52">
            <motion.div
              variants={{
                hidden: { y: 60, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ ease: "linear", delay: 0.9 }}
              viewport={{ once: false }}
              className="flex flex-col md:flex-row space-x-6 md:space-x-96 justify-center item-center"
            >
              <div className="md:ml-8 hidden md:block">
                <Image src={phone2} alt="" />
              </div>
              <div className=" justify-center flex-col flex">
                <h1 className="text-xl md:text-3xl mb-10 font-medium md:max-w-[500px]">
                  Seamless AI Integration
                </h1>
                <p className="text-sm font-light mb-10 md:max-w-[600px]">
                  Mpilo seamlessly integrates into your existing systems,
                  minimizing disruption and maximizing the benefits of
                  AI-powered documentation within your practice.
                </p>
                <Button className="bg-[#F74D4D] w-40 px-10 text-white">
                  Try For Free
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Data Privacy */}
      <section>
        <motion.div
          variants={{
            hidden: { y: 60, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ ease: "linear", delay: 0.9 }}
          viewport={{ once: false }}
          className="h-full flex flex-col py-40 py space-x-5  items-center"
        >
          <p className="text-[#F74D4D] mb-4">
            Safeguarding your data is our top priority.
          </p>
          <h1 className="font-medium text-2xl md:text-4xl mb-8">
            DATA PRIVACY AND SECUIRITY
          </h1>

          <p className="text-lg font-light text-center mb-10 md:max-w-[900px]">
            We understand the critical nature of the information shared during
            patient encounters, and we are committed to maintaining the highest
            standards of security and privacy.
          </p>
          <p className="text-lg  text-center font-light mb-10 md:max-w-[900px]">
            Our platform employs robust encryption protocols to ensure that all
            data transmitted and stored within Mpilo remains secure and
            confidential. We adhere to strict compliance regulations, including
            HIPAA guidelines, to protect patient privacy and uphold
            confidentiality standards.
          </p>

          <Image src={hipaa} alt="" />

          <Button size="lg" className="bg-[#F74D4D] px-20 text-white mt-6">
            Try For Free
          </Button>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-20">
            {/* First column */}
            <div className="flex flex-col items-center">
              <div className="text-center font-bold text-2xl mb-4">2 hours</div>
              <p className="text-center text-lg text-[#808080] w-80">
                saved per day on clinical documentation
              </p>
            </div>

            {/* Second column */}
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold text-2xl mb-4">90%</div>
              <p className="text-center text-lg text-[#808080] w-80">
                of clinicians experience a reduction of fatigue when using Mpilo
              </p>
            </div>

            {/* Third column */}
            <div className="flex flex-col items-center">
              <div className="text-center font-semibold text-2xl mb-4">
                30 Seconds
              </div>
              <p className="text-center text-lg text-[#808080] w-80">
                to get started and try Copilot in a real consultation
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pricing */}
      <section>
        <div className="bg-[#F8FBFF] min-h-screen p-10 md:p-40">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-10">
              <h1 className="text-2xl md:text-4xl mb-4 font-bold">
                Simple, transparent pricing
              </h1>
              <p className="text-lg text-[#808080] max-w-xs md:max-w-none">
                No contracts, No surprise fees.
              </p>
            </div>
            {/* Tabs */}
            <div className="flex justify-center items-center">
              <div className="flex items-center bg-[#E5E8EC] rounded-full p-1 px-6">
                <div
                  className={`cursor-pointer mr-4 ${
                    activeTab === "MONTHLY"
                      ? "bg-[#F74D4D] rounded-full py-2 px-4 text-white font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("MONTHLY")}
                >
                  MONTHLY
                </div>
                <div
                  className={`cursor-pointer ${
                    activeTab === "YEARLY"
                      ? "bg-[#F74D4D] rounded-full py-2 px-4 text-white font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("YEARLY")}
                >
                  YEARLY
                </div>
              </div>
            </div>
          </div>
          {/* Prices */}
          <div></div>
        </div>
      </section>
    </div>
  );
}
