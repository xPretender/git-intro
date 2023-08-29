import styles from './page.module.css'

export default function Home() {
  return (
    <main>
   <div className="Intro">
    <h1>Laboratory Activity: Introduction to Github</h1>
    <p>In this activity, we explored git and githubs functionalities and find out its usefulness in programming and project managing.
      We used VSCode as our IDE and its built-in terminal to execute git commands. We used Github's website to create a repository and
      to push our local repository to the cloud. We also used Github's website to create a pull request and merge it to the main branch.
    </p>
   </div>
   <div className='Step1'>
    <h1>Step 1: Downloading Git</h1>
    <p>Both of the students already had Git installed in their respective systems. We executed the "git --version" command to confirm its installation.
      We also already had Github accounts prior to this activity.
    </p>
   </div>
    <div className='Step2'>
      <h1>Step 2: Git Basics</h1>
      <p>We successfully created a directory, and initialize git on the directory. However, a problem occur at number 4 since "touch README.md" is a unix command and will not work on windows.
        We simply created a README.md file manually. We also successfully added the README.md file to the staging area and committed it.
      </p>
    </div>
    <div className='Step3'>
      <h1>Step 3: Collaborative Development on GitHub</h1>
      <p>We created a repository on Github with no issues. We also are able to push our local repository to the Github repository we made.</p>
    </div>
    <div className='Step4'>
    <h1>Step 4: Working with Branches</h1>
      <p>We are able to create a branch named feature-branch and push the new changes on the repository.</p>
    </div>
    <div className='Step5'>
    <h1>Step 5: Pull Requests on GitHub</h1>
      <p>After pushing the changes, we are tasked to merge main and feature-branch. This is done without any issues.</p>
    </div>
    <div className='Step6'>
    <h1>Step 6: Clone and Collaborate</h1>
      <p>We used the same repository in this activity for the collaborative part. First, Alzona added Ducusin as a collaborator for the repository.
        Then, Ducusin cloned the repository to his local machine. He then created a new branch named react and pushed it to the repository. Lastly, Ducusin
        created a pull request and Alzona merged it to the main branch.
      </p>
    </div>
    </main>
  )
}
