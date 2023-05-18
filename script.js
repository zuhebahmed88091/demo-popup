let projects = [
  {
    projectNmae: "Tonic",
    flag: "desktop",
    cooresponding: 1,
    projectDescription:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    projectImg: "./Properties/snippet-desktop-one.png",
    projectFirstList: ["CANOPY", "Back End Dev", "2015"],
    projectTechnologoies: ["html", "css", "javascript"],
    projectLink: "#",
  },
  {
    projectNmae: "Multi-Post Stories",
    cooresponding: 2,
    flag: "desktop",
    projectDescription:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    projectImg: "./Properties/snippet2.png",
    projectFirstList: ["FACEBOOK", "Full Stack Dev", "2015"],
    projectTechnologoies: ["html", "Ruby on rails", "css", "javascript"],
    projectLink: "#",
  },
  {
    projectNmae: "Facebook 360",
    cooresponding: 3,
    flag: "desktop",
    projectDescription:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    projectImg: "./Properties/snippet1.png",
    projectTechnologoies: ["html", "Ruby on rails", "css", "javascript"],
    projectFirstList: ["FACEBOOK", "Full Stack Dev", "2015"],
    projectLink: "#",
  },
  {
    projectNmae: "Uber Navigation",
    cooresponding: 4,
    flag: "desktop",
    projectDescription:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    projectImg: "./Properties/snippet-four-desktop.png",
    projectTechnologoies: ["html", "Ruby on rails", "css", "javascript"],
    projectFirstList: ["Uber", "Lead Developer", "2018"],
    projectLink: "#",
  },
];
let popupProjects = [
    {
      projectName: "Tonic",
      cooresponding: 1,
      flag: "desktop",
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
      projectImg: "./Properties/snippet-popup-one.svg",
      projectFirstList: ["CANOPY", "Back End Dev", "2015"],
      projectTechnologies: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
      cancelImg: "./Properties/Icon - Cancel.svg",
      seeliveImg: "./Properties/seelive-icon.svg",
      seeSourceImg: "./Properties/seesource-icon.svg",
      projectLink: "#" // Add a valid URL for the projectLink
    },
    {
      projectName: "Multi-Post Stories",
      cooresponding: 2,
      flag: "desktop",
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
      projectImg: "./Properties/snippet-popup-two.svg",
      projectFirstList: ["FACEBOOK", "Full Stack Dev", "2015"],
      projectTechnologies: ["html", "Ruby on rails", "css", "javascript"],
      cancelImg: "./Properties/Icon - Cancel.svg",
      seeliveImg: "./Properties/seelive-icon.svg",
      seeSourceImg: "./Properties/seesource-icon.svg",
      projectLink: "#" // Add a valid URL for the projectLink
    },
    {
      projectName: "Facebook 360",
      cooresponding: 3,
      flag: "desktop",
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
      projectImg: "./Properties/snippet-popout-three.svg",
      projectTechnologies: ["html", "Ruby on rails", "css", "javascript"],
      projectFirstList: ["FACEBOOK", "Full Stack Dev", "2015"],
      cancelImg: "./Properties/Icon - Cancel.svg",
      seeliveImg: "./Properties/seelive-icon.svg",
      seeSourceImg: "./Properties/seesource-icon.svg",
      projectLink: "#" // Add a valid URL for the projectLink
    },
    {
      projectName: "Uber Navigation",
      cooresponding: 4,
      flag: "desktop",
      projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
      projectImg: "./Properties/sinppet-popout-four.svg",
      projectTechnologies: ["html", "Ruby on rails", "css", "javascript"],
      projectFirstList: ["Uber", "Lead Developer", "2018"],
      cancelImg: "./Properties/Icon - Cancel.svg",
      seeliveImg: "./Properties/seelive-icon.svg",
      seeSourceImg: "./Properties/seesource-icon.svg",
      projectLink: "#" // Add a valid URL for the projectLink
    },
  ];
  
  function popout() {
    let popoutOverlaySection = document.getElementById("popup-overlay");
    popoutOverlaySection.classList.add("popup-container");
  
    for (let i = 0; i < popupProjects.length; i++) {
      // let seeProjectBtn = document.querySelectorAll(".user-buttons-desktop");
      // seeProjectBtn.forEach((p) => p.addEventListener('click', () => {
        
      // }));
      let popProject = popupProjects[i];
      let popoutDiv = document.createElement("div");
      popoutDiv.id = popProject.cooresponding;
      popoutDiv.classList.add("popup");
  
      let cancelButton = document.createElement("button");
      cancelButton.classList.add("cancel-btn");
      cancelButton.id = "cancel-button-id";
      let cancelButtonImg = document.createElement("img");
      cancelButtonImg.classList.add("cancel-icon");
      cancelButtonImg.src = popProject.cancelImg;
      cancelButtonImg.alt = "";
      cancelButton.appendChild(cancelButtonImg);
      popoutDiv.appendChild(cancelButton);
  
      let popHeading = document.createElement("section");
      popHeading.classList.add("popup-heading");
      let popProjectName = document.createElement("h2");
      popProjectName.textContent = popProject.projectName; // Fix the property name
      popHeading.appendChild(popProjectName);
  
      let popProjectUnorderedList = document.createElement("ul");
      for (let j = 0; j < popProject.projectFirstList.length; j++) {
        let listItem = popProject.projectFirstList[j];
        let listItems = document.createElement("li");
        if (j === 0) {
          listItems.classList.add("first-list-item-popup");
        } else {
          listItems.classList.add("list-items-popup");
        }
        listItems.textContent = listItem;
        popProjectUnorderedList.appendChild(listItems);
      }
      popHeading.appendChild(popProjectUnorderedList);
      popoutDiv.appendChild(popHeading);
  
      let popProjectImg = document.createElement("img");
      popProjectImg.classList.add("snippet-pop-one");
      popProjectImg.src = popProject.projectImg;
      popProjectImg.alt = "";
      popoutDiv.appendChild(popProjectImg);
  
      let popFooter = document.createElement("footer");
      popFooter.classList.add("popup-footer");
      let popupFooterDesc = document.createElement("article");
      popupFooterDesc.classList.add("popup-footer-desc");
      let popParagraph = document.createElement("p");
      popParagraph.textContent = popProject.projectDescription;
      popupFooterDesc.appendChild(popParagraph);
      popFooter.appendChild(popupFooterDesc);
  
      let popFooterInfo = document.createElement("article");
      popFooterInfo.classList.add("popup-footer-info");
  
      let popTech = document.createElement("section");
      popTech.classList.add("popup-tech");
      let popTechUl = document.createElement("ul");
      popTechUl.classList.add("tools-popup");
      for (let k = 0; k < popProject.projectTechnologies.length; k++) {
        let tech = popProject.projectTechnologies[k];
        let techList = document.createElement("li");
        techList.classList.add("tools-items-popup");
        techList.textContent = tech;
        popTechUl.appendChild(techList);
      }
      popTech.appendChild(popTechUl);
      popFooterInfo.appendChild(popTech);
  
      let popBorderDiv = document.createElement("div");
      popBorderDiv.classList.add("border-only");
      popFooterInfo.appendChild(popBorderDiv);
  
      let popBtnContainer = document.createElement("div");
      popBtnContainer.classList.add("btn-container");
  
      let seeLive = document.createElement("button");
      seeLive.classList.add("seelive");
      seeLive.textContent = "See live";
      let seeliveImg = document.createElement("img");
      seeliveImg.classList.add("see-live-icon");
      seeliveImg.src = popProject.seeliveImg;
      seeliveImg.alt = "";
      seeLive.appendChild(seeliveImg);
      popBtnContainer.appendChild(seeLive);
  
      let seeSource = document.createElement("button");
      seeSource.classList.add("see-source");
      seeSource.textContent = "See source";
      let seeSourceImg = document.createElement("img");
      seeSourceImg.classList.add("see-source-icon");
      seeSourceImg.src = popProject.seeSourceImg;
      seeSourceImg.alt = "";
      seeSource.appendChild(seeSourceImg);
      popBtnContainer.appendChild(seeSource);
  
      popFooterInfo.appendChild(popBtnContainer);
      popFooter.appendChild(popFooterInfo);
      popoutDiv.appendChild(popFooter);
  
      popoutOverlaySection.appendChild(popoutDiv);
    }
  }
  
  popout();

  function generateWorkSection() {
    let portfolioSection = document.getElementById("portfolio-section");
  
    for (i = 0; i < projects.length; i++) {
      let project = projects[i];
  
      if (project.flag === "mobile") {
        let cardSection = document.createElement("section");
        cardSection.classList.add("cards");
        let projectHeader = document.createElement("section");
        projectHeader.classList.add("project-snippet");
        let imgWrapperLink = document.createElement("a");
        imgWrapperLink.classList.add("snippet");
        imgWrapperLink.href = project.projectLink;
        let projectImg = document.createElement("img");
        projectImg.src = project.projectImg;
        projectImg.alt = "";
        let projectFooter = document.createElement("footer");
        projectFooter.classList.add("project-details");
        let projectDetailsHeading = document.createElement("section");
        projectDetailsHeading.classList.add("project-details-heading");
        let projectName = document.createElement("h2");
        projectName.textContent = project.projectNmae;
        let projectUnorderedList = document.createElement("ul");
        for (let j = 0; j < project.projectFirstList.length; j++) {
          let listItem = project.projectFirstList[j];
          if (j === 0) {
            let projectFirstListItem = document.createElement("li");
            projectFirstListItem.classList.add("first-list-item");
            projectFirstListItem.textContent = listItem;
            projectUnorderedList.appendChild(projectFirstListItem);
          } else {
            let listItems = document.createElement("li");
            listItems.classList.add("list-items");
            listItems.textContent = listItem;
            projectUnorderedList.appendChild(listItems);
          }
        }
        let projectDesc = document.createElement("p");
        projectDesc.textContent = project.projectDescription;
        let projectTech = document.createElement("ul");
        projectTech.classList.add("tools");
        for (let k = 0; k < project.projectTechnologoies.length; k++) {
          let tech = project.projectTechnologoies[k];
          let techList = document.createElement("li");
          techList.classList.add("tools-items");
          techList.textContent = tech;
          projectTech.appendChild(techList);
        }
        let projectButton = document.createElement("button");
        projectButton.classList.add("user-buttons");
        projectButton.textContent = "See Project";
        imgWrapperLink.appendChild(projectImg);
        projectHeader.appendChild(imgWrapperLink);
        projectDetailsHeading.appendChild(projectName);
        projectDetailsHeading.appendChild(projectUnorderedList);
        projectFooter.appendChild(projectDetailsHeading);
        projectFooter.appendChild(projectHeader);
        projectFooter.appendChild(projectDesc);
        projectFooter.appendChild(projectTech);
        projectFooter.appendChild(projectButton);
        cardSection.appendChild(projectHeader);
        cardSection.appendChild(projectFooter);
        portfolioSection.appendChild(cardSection);
      } else {
        if (i % 2 === 1) {
          let cardSection = document.createElement("section");
          cardSection.classList.add("cards-desktop-second");
          let projectHeader = document.createElement("section");
          projectHeader.classList.add("project-details-desktop-second");
          let projectDetailsHeading = document.createElement("section");
          projectDetailsHeading.classList.add(
            "project-details-heading-desktop-second"
          );
          let projectName = document.createElement("h2");
          projectName.textContent = project.projectNmae;
          let projectUnorderedList = document.createElement("ul");
  
          for (let j = 0; j < project.projectFirstList.length; j++) {
            let listItem = project.projectFirstList[j];
            if (j === 0) {
              let projectFirstListItem = document.createElement("li");
              projectFirstListItem.classList.add(
                "first-list-item-desktop-second"
              );
              projectFirstListItem.textContent = listItem;
              projectUnorderedList.appendChild(projectFirstListItem);
            } else {
              let listItems = document.createElement("li");
              listItems.classList.add("list-items-desktop-second");
              listItems.textContent = listItem;
              projectUnorderedList.appendChild(listItems);
            }
          }
          let projectDesc = document.createElement("p");
          projectDesc.textContent = project.projectDescription;
          let projectTech = document.createElement("ul");
          projectTech.classList.add("tools-desktop-second");
          for (let k = 0; k < project.projectTechnologoies.length; k++) {
            let tech = project.projectTechnologoies[k];
            let techList = document.createElement("li");
            techList.classList.add("tools-items-desktop-second");
            techList.textContent = tech;
            projectTech.appendChild(techList);
          }
          let projectButton = document.createElement("button");
          projectButton.classList.add("user-buttons-desktop-second");
          projectButton.id = project.cooresponding;
          projectButton.textContent = "See Project";
  
          let projectFooter = document.createElement("footer");
          projectFooter.classList.add("project-snippet-desktop-second");
          let imgWrapperLink = document.createElement("a");
          imgWrapperLink.classList.add("snippet-desktop-second");
          imgWrapperLink.href = project.projectLink;
          let projectImg = document.createElement("img");
          projectImg.src = project.projectImg;
          projectImg.alt = "";
  
          projectDetailsHeading.appendChild(projectName);
          projectDetailsHeading.appendChild(projectUnorderedList);
          projectHeader.appendChild(projectDetailsHeading);
          projectHeader.appendChild(projectDesc);
          projectHeader.appendChild(projectTech);
          projectHeader.appendChild(projectButton);
          cardSection.appendChild(projectHeader);
          imgWrapperLink.appendChild(projectImg);
          projectFooter.appendChild(imgWrapperLink);
          cardSection.appendChild(projectFooter);
          portfolioSection.appendChild(cardSection);
        } else {
          let cardSection = document.createElement("section");
          cardSection.classList.add("cards-desktop");
  
          let projectHeader = document.createElement("section");
          projectHeader.classList.add("project-snippet-desktop");
          let imgWrapperLink = document.createElement("a");
          imgWrapperLink.classList.add("snippet-desktop");
          imgWrapperLink.href = project.projectLink;
          let projectImg = document.createElement("img");
          projectImg.src = project.projectImg;
          projectImg.alt = "";
  
          let projectFooter = document.createElement("footer");
          projectFooter.classList.add("project-details-desktop");
  
          let projectDetailsHeading = document.createElement("section");
          projectDetailsHeading.classList.add("project-details-heading-desktop");
  
          let projectName = document.createElement("h2");
          projectName.textContent = project.projectNmae;
  
          let projectUnorderedList = document.createElement("ul");
  
          for (let j = 0; j < project.projectFirstList.length; j++) {
            let listItem = project.projectFirstList[j];
            if (j === 0) {
              let projectFirstListItem = document.createElement("li");
              projectFirstListItem.classList.add("first-list-item-desktop");
              projectFirstListItem.textContent = listItem;
              projectUnorderedList.appendChild(projectFirstListItem);
            } else {
              let listItems = document.createElement("li");
              listItems.classList.add("list-items-desktop");
              listItems.textContent = listItem;
              projectUnorderedList.appendChild(listItems);
            }
          }
          let projectDesc = document.createElement("p");
          projectDesc.textContent = project.projectDescription;
          let projectTech = document.createElement("ul");
          projectTech.classList.add("tools-desktop");
          for (let k = 0; k < project.projectTechnologoies.length; k++) {
            let tech = project.projectTechnologoies[k];
            let techList = document.createElement("li");
            techList.classList.add("tools-items-desktop");
            techList.textContent = tech;
            projectTech.appendChild(techList);
          }
          let projectButton = document.createElement("button");
          projectButton.classList.add("user-buttons-desktop");
          projectButton.id = project.cooresponding;
          projectButton.textContent = "See Project";
  
          imgWrapperLink.appendChild(projectImg);
          projectHeader.appendChild(imgWrapperLink);
          projectDetailsHeading.appendChild(projectName);
          projectDetailsHeading.appendChild(projectUnorderedList);
          projectFooter.appendChild(projectDetailsHeading);
          projectFooter.appendChild(projectHeader);
          projectFooter.appendChild(projectDesc);
          projectFooter.appendChild(projectTech);
          projectFooter.appendChild(projectButton);
          cardSection.appendChild(projectHeader);
          cardSection.appendChild(projectFooter);
          portfolioSection.appendChild(cardSection);
        }
      }
    }
  }
  
  generateWorkSection();
  