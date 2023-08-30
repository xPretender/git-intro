import styles from "./page.module.css";
import Image from "next/image";
import IMAGES from "./images/index.js";

export default function Home() {
  return (
    <main>
      <div className="Intro">
        <h1 className="title">Laboratory Activity: Introduction to Github</h1>
        <p className="text">
          In this activity, we explored git and GitHub's functionalities and
          found out its usefulness in programming and project managing.
          <br />
          We used VSCode as our IDE and its built-in terminal to execute git
          commands.
          <br />
          We used GitHub's website to create a repository and to push our local
          repository to the cloud. <br />
          We also used GitHub's website to create a pull request and merge it
          into the main branch.
        </p>
      </div>
      <br></br>
      <div className="card">
        <Image alt="screenshots" className="card-image" src={IMAGES.img1} />
        <div className="card-content">
          <h1 className="card-title">Step 1: Downloading Git</h1>
          <p className="card-text">
            Both of the students already had Git installed in their respective
            systems...
          </p>
        </div>
      </div>

      <div className="card">
        <Image alt="screenshots" className="card-image" src={IMAGES.img2} />
        <div className="card-content">
          <h1 className="card-title">Step 2: Git Basics</h1>
          <p className="card-text">
            We successfully created a directory, and initialize git on the
            directory. However, a problem occur at number 4 since "touch
            README.md" is a unix command and will not work on windows. We simply
            created a README.md file manually. We also successfully added the
            README.md file to the staging area and committed it.
          </p>
        </div>
      </div>
      <div className="card">
        <Image alt="screenshots" className="card-image" src={IMAGES.img3} />
        <div className="card-content">
          <h1 className="card-title">
            Step 3: Collaborative Development on GitHub
          </h1>
          <p className="card-text">
            We created a repository on Github with no issues. We also are able
            to push our local repository to the Github repository we made.
          </p>
        </div>
      </div>
      <div className="card">
        <Image alt="screenshots" className="card-image" src={IMAGES.img1} />
        <div className="card-content">
          <h1 className="card-title">Step 4: Working with Branches</h1>
          <p className="card-text">
            We are able to create a branch named feature-branch and push the new
            changes on the repository.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="image-container">
          <Image alt="screenshots" className="image" src={IMAGES.img5} />
          <Image alt="screenshots" className="image" src={IMAGES.img6} />
        </div>
        <div className="card-content">
          <h1 className="card-title">Step 5: Pull Requests on GitHub</h1>
          <p className="card-text">
            After pushing the changes, we are tasked to merge main and
            feature-branch. This is done without any issues.
          </p>
        </div>
      </div>
      <div className="card">
        <div className="image-container">
          <Image alt="screenshots" className="image" src={IMAGES.img7} />
          <Image alt="screenshots" className="image" src={IMAGES.img8} />
        </div>
        <div className="card-content">
          <h1 className="card-title">Step 6: Clone and Collaborate</h1>
          <p className="card-text">
            We used the same repository in this activity for the collaborative
            part. First, Alzona added Ducusin as a collaborator for the
            repository. Then, Ducusin cloned the repository to his local
            machine. He then created a new branch named react and pushed it to
            the repository. Lastly, Ducusin created a pull request and Alzona
            merged it to the main branch.
          </p>
        </div>
      </div>
    </main>
  );
}
