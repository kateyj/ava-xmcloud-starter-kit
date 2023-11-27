# What's in this Starter Kit?

Global styling starter
- text styles
- color variables
- breakpoints
- grid support for Sitecore XM Cloud
- styles for Sitecore XM Cloud Pages Editor
- Button styles
- Link styles

Basic components (to come): 
- Card
- Hero (contains an H1 and should only be one per page)
- Banner (does NOT contain an H1, and can be used throughout pages)
- Video Player
- Audio Player
- Carousel
- Breadcrumbs

Sitecore Out of the Box components:
- CDP Page View
- Column Splitter
- Container
- Content Block
- Image
- Link List
- Navigation
- Page Content
- Partial Design Dynamic Placeholder
- Promo
- Rich Text
- Row Splitter
- Title

Page Templates:
	- App
	- Error
	- 404
	- 500

-----
# Getting Started

## Configure Project

  Before you begin, make the following updates to the codebase to customize for your project:
	- Update /src/project-name (folder) to your project name
	- Update package.json
	- Open /project-name/package.json
	    - Update the following:
            - 'name:' field to the name of your project
            - 'description:' field to describe your project
            - 'config/appname:' field to the name of your project
            - 'author/name' and 'author/url' to those relevant to your project
            - 'repository/type' and 'repository/url' to match your project

 Review the remaining dependencies to ensure that they are what you need for your project.

The following are Sitecore specific dependencies, so leave these in place in both dependencies and devDependencies:
- Sitecore-jss
- Sitecore/Engage
- GraphQL
- Next
- React

---

## Set up Chromatic Account

Once a Chromatic account for the project is created, add the Chromatic Project ID to the `package.json` on line 133.
	Note: The owner of the Chromatic account will need to add all teammates on the project to Chromatic over the course of the work, so it would be beneficial to ensure that there's more than one admin on the Chromatic project. 


----
## Front End Local Environment

The project is set up to allow Front End developers to view their components within Storybook for local development outside of integration into Sitecore.

Of note, the code that the Front End team creates will be the SAME code that gets used by Sitecore. If the Sitecore team needs updates to the code, they will need to collaborate with the Front End team to ensure that any updates made do not break the Storybook preview.

Start Storybook locally by running 

```
npm run storybook
```

When local build is ready, your default browser should open and display your local Storybook instance, if this does not happen, navigate with your browser to http://localhost:3006/

----
### Don't separate Front End and Sitecore Code

> It may seem tempting separate the Sitecore code repository from the Front End code repository, but this is a recipe for duplicated effort and will undermine the accessibility and visual regression testing provided via Storybook and Chromatic respectively. We have tried this on a number of projects and each one has encountered MAJOR issues as a result.
> 
> In short, separate Front End code from Sitecore code at your own risk and be aware that it is an anti-pattern.

-----
## Development process

It's recommended that Sitecore developers collaborate with design and Front End to identify the components and variants needed ahead of commencing development of those components. 

Sitecore developers will define the inputs and provide those definitions to the Front End ahead of the Front End team commencing development of any components.

Most Front End developers and/or teams will NOT need to work within a local Sitecore instance.

Check with your lead to see if you can or should be set up to work in Sitecore from your local machine - this should be the _exception_ for the vast majority of Front End developers and is, in no way, a requirement for successful development of Front End components for Sitecore.  

------------------------------
## Generate a new component in the project

Run `jss scaffold component-name` to generate a new Sitecore usable component with associated stories and style files

This will create the following:
- ComponentName folder in src/components
- ComponentName.tsx file
- ComponentName.scss file
- ComponentName.stories.tsx file
  
This action will also add the import for the styles to `src/assets/sass/components/components.scss` which will ensure that styles are set up properly for both React/Sitecore and also Storybook

If you need to customize the scaffold command for your particular project, you can do so in this file: `src/YOURPROJECTNAME/scripts/scaffold-component.ts`

------------------------------
## Styles and Components

It's important to properly scope your styles to apply to the component only so that there's no pollution of styles between components.

What this means is that for each component, there should be a parent class name for the component and all styles should be applied within the parent class.

### Global styles vs. Component Specific Styles

Unlike some React/NextJS apps, this accelerator is configured to allow for global sharing of styles across the entire application. This is in order to allow the Front End developers to fully utilize Storybook as a local testing environment so that components can be built in isolation from one another.

----
## Sitecore Connected Mode
  
1. Clone the repo
2. Navigate to : `./src/YOURPROJECTNAME`
3. Open terminal and run: `npm install`
4. Next run: `npm run start:connected`
	- this command creates sitecore config files used for later build and integration, this is not optional
	- additionally, this command will allow developers without local Sitecore instances to work using the Sitecore environment that is configured in .env (actually .env.local) as the data source for their work, which will allow the team to work with Sitecore pages and components without the overhead of a local Sitecore instance.

------

**If you do not need to access Sitecore locally, you can skip the below steps about setting up Docker and Sitecore Configuration.**

--------
# Sitecore Developer Setup

**If you are not a Sitecore developer, you most likely do not need to run Sitecore locally. If that's your case, skip the below steps about setting up Docker and Sitecore Configuration.**

--------
## Sitecore Setup

Before beginning, you will need to have a Sitecore project on XM Cloud and you will need to set the details in the src/project-name/.env file to the specifics for your project in order to run using Sitecore Connected mode.

It's recommended that you create a copy of the .env file and name it .env.local for the Front End development team, so that they can use the designated instance of Sitecore (usually the development environment) as their data source as they develop the front end.

TODO: Improve this process through local npm variables 

------
## Run Sitecore Locally
### Machine requirements

- Windows machine

- at least 32GB of RAM

**_if your machine doesn't meet or exceed the RAM, please note that it is NOT recommended that you run Sitecore locally_**

---
### Getting Started:

This will only work on a windows machine, running Sitecore locally requires the use of Windows Containers which can't be run natively on a Mac.

_It IS theoretically possible to use a Windows Virtual Machine on a Mac to accommodate running Sitecore locally as long as the Mac has sufficient RAM, though we have not successfully tested this theory._

- install docker desktop from: https://www.docker.com/

- After installation of docker open PowerShell and execute ```docker -v``` to validate if docker is available

- install .NET 6.0 Runtime (https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.16-windows-x64-installer?cid=getdotnetcore)

- get a copy of the Sitecore license file and place it outside the repository for the project
	- Avanade has a shared license as we are a Sitecore Platinum Partner
	- Check with your Sitecore lead to get this file if you don't have it already

------------
## Docker Setup - with a Docker Desktop License
**This method requires a paid Docker Desktop license, if you don't have a paid Docker Desktop license, you can use the alternate setup instructions in the next section**

- install docker desktop from: https://www.docker.com/

- After installation of docker open PowerShell and execute ```docker -v``` to validate if docker is available

- install .NET 6.0 Runtime (https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/runtime-6.0.16-windows-x64-installer?cid=getdotnetcore)

------------------------------
## Docker Setup - without Docker Desktop License

_This method is a legitimate workaround and doesn't violate Docker's license as it uses the Docker CLI instead of Docker Desktop_

**Before you start:**
- Make sure that Docker Desktop is NOT installed on your Windows machine
- Clear any PATH environment variables referencing Docker Desktop


1. Create a folder to store the docker executables. Ideally in a location without UAC restrictions

```

mkdir c:\docker-cli

```

2. Download the CLI executables from https://download.docker.com/win/static/stable/x86_64
	- at the time of this writing the latest stable version is `docker-23.0.1.zip`

3. Extract the downloaded archive into the folder created in step 1.

4. Download the latest docker-compose executable from https://github.com/docker/compose/releases

5. Rename the downloaded file `docker-compose.exe` and place in the folder created in step 1.

6. Add the directory that you created in step 1 to you system PATH variable

7. Create a `daemon.json` file under `c:\ProgramData\docker\config`
- Create the path if it doesn't already exist
- Put the following into your daemon.json file:

```
{
"dns": [ "8.8.8.8" ]
}
```

- If you would like your docker files and imates stored in a separate disk add the `data-root` attribute like so:

```

{
"dns": [ "8.8.8.8" ],
"data-root": "X:\\<custom-docker-location>"
}

```

This will help save OS disk space

8. Register `dockerd.exe`, one of your Docker CLI executables (in the folder from step 1) as a service

```
c:\docker-cli\dockerd.exe --register-service ; Start-Service docker
```

- Make sure that Hyper-V and Container features are enabled in Docker

9. Restart Windows

10. After restart, confirm that the Docker Engine is running by opening a PowerShell window and executing the following commands:

```

docker -v

docker run hello-world:nanoserver

```

------------------------------
## Initialize Sitecore
**(Do only once per project, and then check in the .env file to share with the team.):**

1. Open PowerShell terminal as administrator

2. Execute: ```Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass```

3. Navigate to solution directory

4. In an ADMIN terminal:

```ps1

ps1

.\init.ps1 -InitEnv -LicenseXmlPath "C:\path\to\license.xml" -AdminPassword "DesiredAdminPassword"

```

5. Restart your terminal and run:

  ```ps1

.\up.ps1

```


6. Be patient! Docker will now now load all the needed images - this will take some time (depending on the complexity of your solution, this can take multiple hours the first time, subsequent runs will NOT take as long.)

7. Depending on your OS settings browser with Sitecore page should pop-up after everything is in place if not navigate to https://xmcloudcm.localhost/sitecore/

8. Follow the instructions to [deploy to XM Cloud](#deploy-to-xmcloud)

9. Create Edge token and [query from edge](#query-edge)

---
## Start Docker Containers (after initialization)

Start your terminal and run:

  ```ps1

.\up.ps1

```

---
## Stop Docker Containers

In order to stop all the docker containers execute 

```ps1

down.ps1

```

If you encounter errors such as "This file came from another computer..." - navigate to the file mentioned in the error in file explorer, next open properties, check 'Unblock' checkbox and apply

----



-------
------
## About Storybook and Chromatic (with links)

---------
--------
## What is Storybook?

Storybook is a frontend workshop for building UI components and pages in isolation.

It helps us develop hard-to-reach states and edge cases without needing to run the whole app and step through complicated workflows to reach specific states.

Additionally, using a plug in, Storybook can automatically validate accessibility testing to ensure that your work can be used by everyone who accesses it. Read more: https://storybook.js.org/blog/accessibility-testing-with-storybook/

Storybook can integrate with Figma (and a number of other design tools) https://www.figma.com/community/plugin/1056265616080331589/Storybook-Connect

You can learn more about Storybook here: https://storybook.js.org/

---
### Storybook Showcase

https://storybook.js.org/showcase/projects
(click a brand, on the next page, click the Storybook icon to visit the brand’s Storybook example)

---
## Customizing the Look of Your Storybook

If you would like to update the look and feel of Storybook to reflect your project's brand identity, you can start with editing the `src/YOURPROJECTNAME/.storybook/basictheme.js` file.

More information about customizations can be found here: https://storybook.js.org/docs/7.0/react/configure/theming/

------------------------------
# What is Chromatic?

> Chromatic automates visual & interaction tests for Storybook.
> 
> Connect CI/CD and Figma workflows to streamline stakeholder sign-off.
> 
> Generates screenshots of every story and provides a side-by-side comparison of them with differences between builds highlighted to help easily catch visual regression issues.
> 
> Chromatic also provides an easy-to-use hosting location for Storybook so that QA teams can use it to test the UI elements separately from Sitecore.

---
### Chromatic Licensing

> 
> Chromatic does have a paid license that is a really nice option for teams that are very committed to the tool.
> 
> However, the free tier is extremely robust, and should be more than sufficient for most uses.
> 
> Read more here: https://www.chromatic.com/pricing
> 

----
### Chromatic Setup

>  
> Each project will need a Chromatic project set up for it. Start here:
> https://www.chromatic.com/docs/
> 
> Suggested Workflow:
> https://www.chromatic.com/docs/workflow
> 
-----
### CI/CD deployments for Chromatic

> 
> If you are using Azure DevOps as your repository, you can update the `azure-pipelines.yml` in this codebase to specify which branch you want to use to trigger builds.
> 
> The included file takes into account some of the Sitecore specific needs of the project, so we recommend making updates to the included file rather than starting fresh.
> 
> Read more about deploying Chromatic using Azure Pipelines here: https://www.chromatic.com/docs/azure-pipelines
> 

------------------------
------
## TODOs

TODO: Add the rest of the notes about how the accelerator was created from the Sitecore provided starter kit.

- Explain Figma integration with Storybook (and list figma alternatives so that we can decouple as much as possible.)
- Integrating Figma, Storybook, and Chromatic

----
## This is a work in progress.

If you would like to suggest a change, please open a pull request to introduce it, we welcome your input and contributions.
