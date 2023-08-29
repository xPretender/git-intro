import styles from './page.module.css';
import Image from 'next/image';
import IMAGES from './images/index.js'

export default function Home() {
  return (
    <main>
    <div className="Intro">
     <h1 className="title">Laboratory Activity: Introduction to Github</h1>
     <p className="text">In this activity, we explored git and githubs functionalities and find out its usefulness in programming and project managing.
       <br></br>We used VSCode as our IDE and its built-in terminal to execute git commands.<br></br> We used Github's website to create a repository and
       to push our local repository to the cloud. <br></br>We also used Github's website to create a pull request and merge it to the main branch.
     </p>
    </div>
    
    <h1 className="title">Step 1: Downloading Git</h1>
    <div className='Step1'>
     <Image alt="screenshots" 
     className="image"
     src={IMAGES.img1}
     />
     <p className="text">Both of the students already had Git installed in their respective systems. We executed the "git --version" command to confirm its installation.
       We also already had Github accounts prior to this activity.
     </p>
    </div>
    <h1 className="title">Step 2: Git Basics</h1>
     <div className='Step2'>
       
       <Image alt="screenshots" 
        className="image"
     src={IMAGES.img2}
     />
       <p className="text">We successfully created a directory, and initialize git on the directory. However, a problem occur at number 4 since "touch README.md" is a unix command and will not work on windows.
         We simply created a README.md file manually. We also successfully added the README.md file to the staging area and committed it.
       </p>
     </div>
     <h1 className="title">Step 3: Collaborative Development on GitHub</h1>
     <div className='Step3'>
       
       <Image alt="screenshots" 
        className="image"
     src={IMAGES.img3}
     />
       <p className="text">We created a repository on Github with no issues. We also are able to push our local repository to the Github repository we made.</p>
     </div>
     <h1 className="title">Step 4: Working with Branches</h1>
     <div className='Step4'>
     
     <Image alt="screenshots" 
      className="image"
     src={IMAGES.img4}
     />
       <p className="text">We are able to create a branch named feature-branch and push the new changes on the repository.</p>
     </div>
     <h1 className="title">Step 5: Pull Requests on GitHub</h1>
     <div className='Step5'>
     
     <Image alt="screenshots" 
      className="image"
     src={IMAGES.img5}
     />
     <Image alt="screenshots" 
      className="image"
     src={IMAGES.img6}
     />
       <p className="text">After pushing the changes, we are tasked to merge main and feature-branch. This is done without any issues.</p>
     </div>
     <h1 className="title">Step 6: Clone and Collaborate</h1>
     <div className='Step6'>
     
     <Image alt="screenshots" 
      className="image"
     src={IMAGES.img7}
     />
     <Image alt="screenshots" 
      className="image"
     src={IMAGES.img8}
    />
       <p className="text">We used the same repository in this activity for the collaborative part. First, Alzona added Ducusin as a collaborator for the repository.
         Then, Ducusin cloned the repository to his local machine. He then created a new branch named react and pushed it to the repository. Lastly, Ducusin
         created a pull request and Alzona merged it to the main branch.
       </p>
     </div>
     </main>
  );
}
