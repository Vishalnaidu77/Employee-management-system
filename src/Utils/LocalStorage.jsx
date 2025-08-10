const employees = [ 
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete onboarding form",
        description: "Fill out and submit the onboarding paperwork.",
        date: "2025-08-01",
        category: "HR"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Set up email signature",
        description: "Configure your company email signature properly.",
        date: "2025-08-03",
        category: "IT"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Attend team introduction meeting",
        description: "Join the welcome call with team members.",
        date: "2025-08-02",
        category: "Team"
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create initial project report",
        description: "Summarize the findings of the kickoff meeting.",
        date: "2025-08-04",
        category: "Project"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit timesheet",
        description: "Weekly timesheet submission.",
        date: "2025-08-01",
        category: "Admin"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Complete security training",
        description: "Mandatory annual security training session.",
        date: "2025-07-30",
        category: "Compliance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update project documentation",
        description: "Make edits to the shared documents.",
        date: "2025-08-05",
        category: "Documentation"
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Review team goals",
        description: "Analyze and provide feedback on Q3 goals.",
        date: "2025-08-06",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Install required software",
        description: "Download and set up all required tools.",
        date: "2025-08-02",
        category: "IT"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Schedule 1-on-1 meeting",
        description: "Book a call with your manager.",
        date: "2025-08-06",
        category: "HR"
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Saanvi",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Fix UI bugs",
        description: "Resolve issues reported by QA team.",
        date: "2025-08-04",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Push code to repo",
        description: "Deploy latest changes to staging branch.",
        date: "2025-08-01",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Merge PR #234",
        description: "Failed to resolve merge conflicts in time.",
        date: "2025-07-31",
        category: "Code Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Review design mockups",
        description: "Ensure new designs meet brand guidelines.",
        date: "2025-08-05",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Join daily standup",
        description: "Attend quick team status meeting.",
        date: "2025-08-03",
        category: "Meetings"
      }
    ],
    taskStats: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Rohan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Draft press release",
        description: "Create initial version for upcoming product.",
        date: "2025-08-07",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Analyze campaign results",
        description: "Review analytics from last week.",
        date: "2025-08-05",
        category: "Marketing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update social media calendar",
        description: "Plan content for next month.",
        date: "2025-08-02",
        category: "Social Media"
      }
    ],
    taskStats: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];

  
  const admin = [
    {
      id: 100,
      firstName: "Vishal",
      email: "admin@example.com",
      password: "123"
    }
  ];
  

export const setLocalStorage = () => {
    localStorage.setItem('Employee' , JSON.stringify(employees))
    localStorage.setItem('Admin' , JSON.stringify(admin))
}

// setLocalStorage()

export const getLocalStorage = () => {
   const employees =  JSON.parse(localStorage.getItem('Employee'))
   const admin =  JSON.parse(localStorage.getItem('Admin'))
    
   return {employees, admin}
}
