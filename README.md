# About
This project's goal is to develop a website that provides information on wildfire safety.
The website is intended to be centered around the community, providing both general information on wildfire preparedness such as mitigation or "go-bags", but also location-specific information, such as evacuation routes.
Further, we hope to add useful features to the website that are lacking in other websites of similar nature, such as a Lost/Found pet registry, or a forum where users can share information like their available car space should neighbors need help evacuating.

It is also our belief that being able to share the progress in mitigation and preparedness will help communities better prepare for environmental disasters collectively and cooperatively.
Our hope is to foster this disaster-preparedness for communities, as communities.

## The Team
| Name | Git username | Email |
| ---- | ------------ | ----- |
| Andréas J. | `ondryice` or `0ndryice` | ondryice2357@gmail.com |

# Etiquette
Developers should follow etiquette when making changes to the website, and the following subsections detail the best practices for doing so.
Scrums will be held on a bi-weekly basis (on Fridays), allowing the team to review the Sprint and plan the next one.

## Epics & Issues
We use agile development for this website, and developers should only work within this paradigm.
Epics are the groups of tasks that we work through to develop the site.
Issues are the "subtasks" associated with the Epics.
The *team* works on epics, while team *members* work on Issues.
If the work needed to complete an issue *can* be done by more than one person, it should be split up into multiple tasks.

### **Epics**
Every Epic currently being worked on must belong to the current milestone.
In general, Epics should not be assigned to a milestone unless they are currently being worked on.

### **Issues**
Every Issue *must* belong to an Epic, and should have an estimate.
In general, the estimate should *roughly* correspond to the number of hours expected to complete the Issue.
An estimate of `1` indicates a very simple, and quick, task.
An estimate of `2` indicates a simple task, but it may take longer to complete.
An estimate of `3` or `4` indicates a complicated task that may take a long time to complete.
Typically, estimates over `4` indicate the task is bloated, and should be divided into smaller chunks.

### **Branches**
Developers should name their branches like so:

```
{issue-number}-{username}-{short-description}
```

For example: for the initial changes to this README file, I named the branch `3-ondryice-README`.

There should never be more than one issue associated with a branch; this ensures that merging the branch accomplishes *only* the task it was created to.
Further, it means that changes to the website are not held up by bugs or needed changes for other tasks.

If a developer is trying to change the background color of the navbar, for example, this change should not be delayed by a bug in the navbar button functionality.

### **Pull Requests**
*Any* changes to the repository *must* be done through Pull Requests.
Developers should *never* commit directly to the **main** branch, and should never merge their own pull request.
Developers should assign another team member to review the pull request and merge it, so long as merge conflicts are resolved and the changes do not break **main**.

# Development
This website is developed with ReactJS, a "flavor" of javascript.
The workflow is a flavor of agile development, through the use of ZenHub, a popular extension for GitHub.

## Resources for Development
Developers can refer to the following resources when making changes to the repository.

### **GitHub**
GitHub is a source control tool particularly useful when developing as a team.
Source control refers to managing conflicts when multiple people or groups of people are editing the same files.
Please view the [GitHub Quick Start](https://docs.github.com/en/get-started/quickstart/hello-world) page for information on Repositories, Branches, Commits, and Pull Requests.

#### [GitHub Flavored Markdown (GFM)]()
See the [GitHub docs](https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) or the [GFM specs](https://github.github.com/gfm/) for tips on writing markdown files specific to GFM.
We use GFM for all our Markdown (extension `.md`) files.

### **[ReactJS](https://reactjs.org/)**
- [Getting Started](https://reactjs.org/docs/getting-started.html): creating a new React app
- [Intro to React](https://reactjs.org/tutorial/tutorial.html): what *is* React?
- [Components & Props](https://reactjs.org/docs/components-and-props.html): we are developing this website using exclusively React components, so this is an essential piece of knowledge
- [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)

### **[ZenHub](https://www.zenhub.com/)**
- [Browser Extension](https://www.zenhub.com/extension)
- [What is ZenHub?](https://help.zenhub.com/support/solutions/articles/43000010778-what-is-zenhub-an-intro-to-zenhub-in-github)
- [Boards](https://www.zenhub.com/boards): ZenHub boards for agile development
- [Agile Development: Best Practices](https://blog.zenhub.com/)
- [Additional Resources](https://www.zenhub.com/resources)
