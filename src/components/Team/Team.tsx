"use client";
import React, { useState } from "react";
import {
  DialogRow,
  LinkedInIcon,
  StyledDialogTitle,
  TeamContainer,
  TeamGrid,
  TeamMemberBio,
  TeamMemberCard,
  TeamMemberCol,
  TeamMemberFocus,
  TeamMemberImageModal,
  TeamMemberImg,
  TeamMemberName,
  TeamMemberRole,
  TeamPageSubtitle,
  TeamPageTitle
} from "./Team-styles";
import {
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  focus: string;
  bio: string;
  linkedIn?: string;
}

interface ModalContent {
  name: string;
  image: string;
  bio: string;
  linkedIn?: string;
}

const Team = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Jason Crowe",
      role: "Original Qortal Founder and Q-App Developer",
      image: "/images/Team/jason.png",
      focus:
        "Q-App development, hardware and partnership development, podcasts/interviews",
      bio: "Jason Crowe is an experienced IT professional, systems administrator, hardware specialist, and developer with nearly 25 years of expertise. In 2013, Jason discovered blockchain technology and recognized its potential to redefine digital infrastructure. After leading multiple projects, he realized that his vision for true digital sovereignty was still unmet, and founded the Qortal Blockchain Project. Jason conceptualized many underlying features and details of the project, wrote the original concept paper, and assembled the initial developer group.",
      linkedIn: "https://www.linkedin.com/in/jason-crowe-b7a9827a/"
    },
    {
      name: "Siddi",
      role: "Core Network (Reticulum) Developer",
      image: "/images/Team/siddi.png",
      focus: "Reticulum integration and networking infrastructure",
      bio: "Siddi has a background in Engineering (M.Sc. in Electrical Engineering, ETH Zurich) and over 25 years of experience as a Systems Integrator and Architect. He joined Qortal in 2021 and has been contributing to the Java implementation of Reticulum since 2023. He is part of the Qortal Core development team, integrating Reticulum as an additional network stack.",
      linkedIn: "https://www.linkedin.com/in/j%C3%BCrg-schulthess-18448330/"
    },
    {
      name: "Phillip Lang",
      role: "User Interface Developer",
      image: "/images/Team/phillip.png",
      focus: "User Interface and Q-App development",
      bio: "Phillip has 7 years of experience in JavaScript/React development and joined Qortal in 2022. He is the lead developer of Qortal Hub and Qortal Go, with a core focus on building unified frameworks for Q-App development.",
      linkedIn: "https://www.linkedin.com/in/philliplangmartinez/"
    },
    {
      name: "Justin Ferrari",
      role: "Marketer and Developer",
      image: "/images/Team/justin.png",
      focus: "Marketing, community management, and testing",
      bio: "Justin has been working on Qortal for over 3  years, starting with user interface development, then proceeding to code some Q-Apps, and then moving into marketing and community management. He is responsible for managing the Qortal.dev website, has his own social media channels talking about Qortal, and regularly coordinates in-person events to spread the idea of decentralization at the grassroots level.",
      linkedIn: "https://www.linkedin.com/in/justin-ferrari/"
    },
    {
      name: "Kenny Cudworth",
      role: "Consultant",
      image: "/images/Team/kenny.png",
      focus: "Core Development - new features, bug fixes, optimizations",
      bio: "Kenny brings 25 years of expertise in Java web service design and development, specializing in solutions that enhance logistical operations, load planning, and financial decision-making. His proficiency spans both SQL and NoSQL databases, ensuring robust and scalable data management. In 2022, he joined the Qortal platform and began making significant contributions in 2024.",
      linkedIn: "https://www.linkedin.com/in/kennycud/"
    },
    {
      name: "Qortal Seth",
      role: "Qortal App Developer and Tester",
      image: "/images/Team/generic.png",
      focus: "Q-App development",
      bio: "Exclusively developing Q-Apps on Qortal since their public release in April 2023, with a mission to establish a sustainable new economy where community-driven, open-source software is both profitable and culturally normalized."
    },
    {
      name: "Gisele",
      role: "Community Administrator and Tester",
      image: "/images/Team/generic-girl.png",
      focus:
        "Conveying concerns and questions from the community to the development teams",
      bio: "Dev Admin for Qortal since January 2023 — responsible for reviewing features and functionality, and assisting with testing all core releases on Raspberry Pi 4 as well as UI releases for macOS and Windows. Previously provided technical support for Qortal beginning in March 2021 via Discord and Telegram, specializing in setup and troubleshooting for Raspberry Pi 4, Qortector, and macOS. Joined the Qortal network at genesis."
    },
    {
      name: "Ice",
      role: "Founder and Core Developer",
      image: "/images/Team/generic.png",
      focus: "Core Development - bug fixes, optimizations, and utilities",
      bio: "A results-driven senior technology executive with over 20 years of experience in IT leadership, systems engineering, and advanced technology integration. As Vice President of Engineering in the corporate world, he leads teams delivering next-generation streaming and unified communication solutions that drive multimillion-dollar growth. A founder of the Qortal Blockchain project and proficient in Java and other programming languages, he brings deep expertise in systems virtualization, cybersecurity, and network architecture, supported by industry certifications in security and systems engineering. He has a proven record of guiding digital transformation, mentoring high-performance teams, and aligning technology with complex mission needs."
    },
    {
      name: "Nicola",
      role: "Interface Developer",
      image: "/images/Team/generic.png",
      focus: "User Interface, Q-App development",
      bio: "Nicola has 10 years of experience in backend development in Java. Now he's working in ML/AI processes as DevOps. He joined the Qortal team in 2025, focusing on Qortal Hub frontend development, and Q-App development."
    }
  ];

  // Function to handle opening the modal with member bio
  const setMemberInModal = (member: TeamMember) => {
    setModalContent({
      name: member.name,
      bio: member.bio,
      image: member.image,
      linkedIn: member.linkedIn
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const openLinkedIn = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      <TeamContainer>
        <TeamPageTitle>Meet the Dev Admins</TeamPageTitle>
        <TeamPageSubtitle>
          Learn about the dedicated team behind Qortal Blockchain. Meet the
          developers and administrators driving the project forward.
        </TeamPageSubtitle>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              onClick={() => setMemberInModal(member)}
              key={index}
            >
              <TeamMemberImg
                src={member.image}
                alt={member.name}
                width={300}
                height={300}
                quality={100}
              />
              <TeamMemberName>{member.name}</TeamMemberName>
              <TeamMemberRole>{member.role}</TeamMemberRole>
              <TeamMemberFocus>{member.focus}</TeamMemberFocus>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </TeamContainer>
      {isModalOpen && (
        <Dialog open={isModalOpen} onClose={closeModal}>
          <DialogRow>
          <StyledDialogTitle>{modalContent?.name}</StyledDialogTitle>
          <IconButton
            onClick={closeModal}
          >
            <CloseIcon />
          </IconButton>
          </DialogRow>
          <DialogContent>
            <TeamMemberCol>
              <TeamMemberImageModal
                src={modalContent?.image || ""}
                alt="Team Member Image"
                width={300}
                height={300}
                quality={100}
              />
              <TeamMemberBio>{modalContent?.bio}</TeamMemberBio>
              {modalContent?.linkedIn && (
                <LinkedInIcon
                  onClickFunc={() => openLinkedIn(modalContent?.linkedIn)}
                  width={"30"}
                  height={"30"}
                  color={theme.palette.text.primary}
                />
              )}
            </TeamMemberCol>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Team;
