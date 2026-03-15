const questions = [

{
    type: "single",
    q: "What is a deliverable?",
    choices: [
        "A unique output of a project",
        "A resource allocated to the project",
        "A checkpoint in the project timeline",
        "A team member working on a project"
    ],
    answer: [0],
    explanation: "A deliverable is a product, service, or result produced during a project."
},

{
    type: "single",
    q: "During product testing only 60% could open the packaging easily. What should the project manager do?",
    choices: [
        "Request a team meeting to decide corrective action",
        "Inform the sponsor the project failed",
        "Change the test results",
        "Tell the customer 60% is acceptable"
    ],
    answer: [0],
    explanation: "The requirement states everyone must open it easily, so corrective action is required."
},

{
    type: "single",
    q: "What is a project life cycle?",
    choices: [
        "Shortest project duration activities",
        "Tasks to deliver product features",
        "Series of phases from project start to completion",
        "Steps used to solve a problem"
    ],
    answer: [2],
    explanation: "The life cycle describes the phases a project goes through."
},

{
    type: "single",
    q: "What is a benefit of lessons learned documentation?",
    choices: [
        "Sharing best practices with future teams",
        "Creating marketing materials",
        "Closing the project with the client",
        "Punishing mistakes"
    ],
    answer: [0],
    explanation: "Lessons learned capture knowledge for future projects."
},

{
    type: "single",
    q: "What is a key characteristic of adaptive project management?",
    choices: [
        "Continuous refinement based on stakeholder feedback",
        "Minimal changes",
        "Strict sequential tasks",
        "Delivery only at the end"
    ],
    answer: [0],
    explanation: "Adaptive methods rely on continuous feedback."
},

{
    type: "single",
    q: "If a product feature is out of scope, what should you do?",
    choices: [
        "Decline the feature",
        "Develop it anyway",
        "Consider it a dependency",
        "Add it to the scope statement"
    ],
    answer: [0],
    explanation: "Features outside scope should not be implemented without change approval."
},

{
    type: "single",
    q: "What role does quality assurance play in a project?",
    choices: [
        "Ensures project is under budget",
        "Ensures processes meet defined standards",
        "Ensures employees are qualified",
        "Ensures project finishes early"
    ],
    answer: [1],
    explanation: "Quality assurance verifies compliance with standards."
},

{
    type: "single",
    q: "Which scenario demonstrates schedule dependency?",
    choices: [
        "Working only during business hours",
        "Waiting for one task to finish before another starts",
        "Working independently",
        "Estimating minimum time"
    ],
    answer: [1],
    explanation: "Dependencies exist when one task relies on another."
},

{
    type: "single",
    q: "What should you do if a party date change increases venue cost?",
    choices: [
        "Determine cost difference and discuss options with the customer",
        "Cancel the venue",
        "Reduce menu items",
        "Invoice the customer immediately"
    ],
    answer: [0],
    explanation: "Budget changes should be discussed with stakeholders."
},

{
    type: "single",
    q: "Which action signifies formal acceptance of the final product?",
    choices: [
        "Closing vendor contracts",
        "Final budget approval",
        "Completing paperwork",
        "Approval by the sponsor and customer"
    ],
    answer: [3],
    explanation: "Formal acceptance occurs when sponsor or customer approves deliverables."
},

{
    type: "single",
    q: "Which stage of change management involves discussing cost impact with the sponsor?",
    choices: [
        "Identify the change",
        "Approve the change",
        "Assess the change impact",
        "Implement the change"
    ],
    answer: [2],
    explanation: "Discussing implications is part of impact assessment."
},

{
    type: "single",
    q: "Who must approve major project scope or funding changes?",
    choices: [
        "Business analyst",
        "Project manager",
        "Project sponsor",
        "Resource manager"
    ],
    answer: [2],
    explanation: "Sponsors authorize major project changes."
},

{
    type: "single",
    q: "Which project management approach suits stable requirements?",
    choices: [
        "Scrum",
        "Adaptive",
        "Predictive",
        "Incremental"
    ],
    answer: [2],
    explanation: "Predictive approaches work best when requirements are stable."
},

{
    type: "single",
    q: "Which document authorizes the start of a project?",
    choices: [
        "Project management plan",
        "Scope statement",
        "Project charter",
        "Communication plan"
    ],
    answer: [2],
    explanation: "The project charter officially authorizes the project."
},

{
    type: "single",
    q: "What impact does gold plating have?",
    choices: [
        "Scope increases and cost stays same",
        "Scope increases and cost increases",
        "Scope stays same and cost decreases",
        "Scope stays same and cost increases"
    ],
    answer: [1],
    explanation: "Gold plating adds unnecessary features which increase cost."
},

{
    type: "single",
    q: "Which management plan defines team roles and responsibilities?",
    choices: [
        "Cost management plan",
        "Scope management plan",
        "Schedule management plan",
        "Resource management plan"
    ],
    answer: [3],
    explanation: "Resource management defines roles and skills needed."
},

{
    type: "single",
    q: "Which plan outlines work needed to meet project objectives?",
    choices: [
        "Cost plan",
        "Scope management plan",
        "Resource plan",
        "Schedule plan"
    ],
    answer: [1],
    explanation: "Scope management defines the work required."
},

{
    type: "single",
    q: "What is project procurement?",
    choices: [
        "Purchasing external goods or services",
        "Analyzing requirements",
        "Identifying funding",
        "Planning communications"
    ],
    answer: [0],
    explanation: "Procurement involves acquiring products or services from vendors."
},

{
    type: "single",
    q: "Which document describes work included and excluded from the project?",
    choices: [
        "Project baseline",
        "Scope statement",
        "Business case",
        "Work breakdown structure"
    ],
    answer: [1],
    explanation: "The scope statement defines project boundaries."
},

{
    type: "single",
    q: "Using a previous project's budget to estimate cost is which method?",
    choices: [
        "Expert judgment",
        "Three-point estimation",
        "Bottom-up estimation",
        "Analogous estimation"
    ],
    answer: [3],
    explanation: "Analogous estimation uses historical data."
},

{
    type: "single",
    q: "Who oversees daily project activities?",
    choices: [
        "Project manager",
        "Client",
        "Vendor",
        "Sponsor"
    ],
    answer: [0],
    explanation: "The project manager coordinates project work."
},

{
    type: "single",
    q: "What is project procurement?",
    choices: [
        "The purchasing of external goods and services needed to complete a project",
        "The analysis of business requirements needed to complete a project",
        "The identification of funding requirements",
        "Planning communication methods for a project"
    ],
    answer: [0],
    explanation: "Procurement involves acquiring goods or services from outside vendors to support the project."
},

{
    type: "single",
    q: "In a project, what describes work that should be included and work that should be excluded?",
    choices: [
        "Project baseline",
        "Scope statement",
        "Business case",
        "Work breakdown structure"
    ],
    answer: [1],
    explanation: "The scope statement defines what is included and excluded in the project."
},

{
    type: "single",
    q: "You are estimating project cost using the budget from a similar project last month. What estimation method is this?",
    choices: [
        "Expert judgment estimation",
        "Three-point estimation",
        "Bottom-up estimation",
        "Analogous estimation"
    ],
    answer: [3],
    explanation: "Analogous estimation uses historical data from previous projects."
},

{
    type: "single",
    q: "Why should you archive project documents and processes?",
    choices: [
        "To complete the project management plan",
        "To store them on the project manager's computer",
        "To keep a historical record of project activities",
        "To redistribute remaining resources"
    ],
    answer: [2],
    explanation: "Archived documents help future teams learn from previous projects."
},

{
    type: "single",
    q: "What is the impact of scope creep on a project?",
    choices: [
        "Fewer resources are needed",
        "The project takes longer to complete",
        "A new project manager is assigned",
        "The project includes fewer deliverables"
    ],
    answer: [1],
    explanation: "Scope creep adds work to the project which increases schedule and cost."
},

{
    type: "multi",
    q: "Which characteristics belong to adaptive project management?",
    choices: [
        "Reliance on customer input throughout the project",
        "Increased flexibility to adjust the project",
        "Completion strictly according to the initial plan",
        "Continuous refinement of product features"
    ],
    answer: [0,1,3],
    explanation: "Adaptive methods rely heavily on stakeholder feedback and allow flexibility in project execution."
},

{
    type: "single",
    q: "What is a vendor?",
    choices: [
        "A business analyst working with finance",
        "An external supplier who provides goods or services",
        "A procurement team member",
        "A professional who sells the final product"
    ],
    answer: [1],
    explanation: "Vendors supply goods or services required for the project."
},

{
    type: "single",
    q: "What information should be included in a project status update?",
    choices: [
        "Project work that has been completed",
        "A list of stakeholders",
        "Project objectives",
        "Project scope description"
    ],
    answer: [0],
    explanation: "Status updates typically focus on completed work, current progress, and upcoming tasks."
},

{
    type: "single",
    q: "Which document defines how project communications will be handled?",
    choices: [
        "Communication management plan",
        "Risk management plan",
        "Procurement plan",
        "Scope management plan"
    ],
    answer: [0],
    explanation: "The communication management plan outlines how information will be shared with stakeholders."
},

{
    type: "single",
    q: "Which role is responsible for funding the project?",
    choices: [
        "Project manager",
        "Project sponsor",
        "Team lead",
        "Business analyst"
    ],
    answer: [1],
    explanation: "The project sponsor provides funding and overall support for the project."
},

{
    type: "single",
    q: "What is a risk in project management?",
    choices: [
        "An event that has already happened",
        "A potential event that may impact the project",
        "A completed project task",
        "A change request"
    ],
    answer: [1],
    explanation: "Risks are uncertain events that may affect the project positively or negatively."
},

{
    type: "single",
    q: "What is the purpose of a risk register?",
    choices: [
        "To document project schedule",
        "To track identified risks",
        "To store stakeholder contacts",
        "To record project deliverables"
    ],
    answer: [1],
    explanation: "The risk register records identified risks, their impact, and mitigation strategies."
},

{
    type: "single",
    q: "Which project constraint relates to financial resources?",
    choices: [
        "Scope",
        "Cost",
        "Quality",
        "Risk"
    ],
    answer: [1],
    explanation: "Cost represents the financial resources allocated to the project."
},

{
    type: "single",
    q: "What tool is commonly used to visualize project tasks and timelines?",
    choices: [
        "Gantt chart",
        "Risk register",
        "Stakeholder map",
        "Budget report"
    ],
    answer: [0],
    explanation: "Gantt charts show project schedules and task dependencies visually."
},

{
    type: "single",
    q: "What does WBS stand for?",
    choices: [
        "Work Breakdown Structure",
        "Workflow Business Strategy",
        "Work Budget System",
        "Work Business Summary"
    ],
    answer: [0],
    explanation: "A Work Breakdown Structure divides project work into smaller components."
},

{
    type: "single",
    q: "Which document outlines how project risks will be managed?",
    choices: [
        "Risk management plan",
        "Scope statement",
        "Communication plan",
        "Resource plan"
    ],
    answer: [0],
    explanation: "The risk management plan defines how risks will be identified and handled."
},

{
    type: "single",
    q: "What is stakeholder engagement?",
    choices: [
        "Managing project documentation",
        "Communicating and collaborating with stakeholders",
        "Creating project schedules",
        "Allocating resources"
    ],
    answer: [1],
    explanation: "Stakeholder engagement involves working closely with stakeholders throughout the project."
},

{
    type: "single",
    q: "What is the primary purpose of project monitoring?",
    choices: [
        "Track project performance",
        "Hire new team members",
        "Increase project scope",
        "Change project objectives"
    ],
    answer: [0],
    explanation: "Monitoring ensures project performance aligns with the plan."
},

{
    type: "single",
    q: "What is the final phase of the project life cycle?",
    choices: [
        "Planning",
        "Executing",
        "Closing",
        "Monitoring"
    ],
    answer: [2],
    explanation: "The closing phase finalizes all activities and formally ends the project."
},

{
    type: "single",
    q: "Which technique helps identify project risks through brainstorming?",
    choices: [
        "Risk identification workshop",
        "Budget planning",
        "Stakeholder meeting",
        "Quality inspection"
    ],
    answer: [0],
    explanation: "Workshops help teams collaboratively identify potential risks."
},

{
    type: "single",
    q: "What is a milestone in a project?",
    choices: [
        "A task that takes the longest time",
        "A significant point or event in the project timeline",
        "A financial report",
        "A team member role"
    ],
    answer: [1],
    explanation: "Milestones mark important progress points in a project schedule."
},

{
    type: "single",
    q: "What is the primary purpose of a stakeholder register?",
    choices: [
        "To store project schedules",
        "To document project stakeholders and their interests",
        "To record project costs",
        "To define project scope"
    ],
    answer: [1],
    explanation: "A stakeholder register identifies stakeholders and their level of influence and interest."
},

{
    type: "single",
    q: "Which document defines the approved version of project scope, schedule, and cost?",
    choices: [
        "Project baseline",
        "Risk register",
        "Business case",
        "Communication plan"
    ],
    answer: [0],
    explanation: "The project baseline is the approved plan used for performance comparison."
},

{
    type: "single",
    q: "What is a change request?",
    choices: [
        "A proposal to modify project documents, deliverables, or baselines",
        "A project completion report",
        "A stakeholder meeting agenda",
        "A project risk"
    ],
    answer: [0],
    explanation: "Change requests formally propose changes to project scope, schedule, or cost."
},

{
    type: "single",
    q: "What is the purpose of project scheduling?",
    choices: [
        "To estimate vendor prices",
        "To determine task order and timeline",
        "To hire team members",
        "To define the project budget"
    ],
    answer: [1],
    explanation: "Scheduling organizes project tasks and determines their sequence and duration."
},

{
    type: "single",
    q: "Which role manages project risks and coordinates the project team?",
    choices: [
        "Project manager",
        "Sponsor",
        "Vendor",
        "Customer"
    ],
    answer: [0],
    explanation: "The project manager leads the team and manages risks, schedules, and deliverables."
},

{
    type: "single",
    q: "What does project monitoring and controlling involve?",
    choices: [
        "Tracking progress and making adjustments",
        "Hiring project staff",
        "Delivering final products",
        "Closing contracts"
    ],
    answer: [0],
    explanation: "Monitoring ensures project performance aligns with the project plan."
},

{
    type: "single",
    q: "What is the main goal of project planning?",
    choices: [
        "To define project objectives and create a roadmap for achieving them",
        "To finish the project early",
        "To reduce stakeholder involvement",
        "To eliminate risks"
    ],
    answer: [0],
    explanation: "Planning establishes objectives, strategies, and steps needed to achieve project goals."
},

{
    type: "single",
    q: "Which constraint refers to the project's timeline?",
    choices: [
        "Cost",
        "Scope",
        "Schedule",
        "Quality"
    ],
    answer: [2],
    explanation: "Schedule refers to the timeline and deadlines for completing project tasks."
},

{
    type: "single",
    q: "What is project scope?",
    choices: [
        "The budget of the project",
        "The work required to deliver project results",
        "The project team structure",
        "The project communication process"
    ],
    answer: [1],
    explanation: "Scope defines the work necessary to produce the project deliverables."
},

{
    type: "single",
    q: "Which technique estimates task duration using optimistic, pessimistic, and most likely estimates?",
    choices: [
        "Analogous estimation",
        "Three-point estimation",
        "Bottom-up estimation",
        "Expert judgment"
    ],
    answer: [1],
    explanation: "Three-point estimation calculates duration using optimistic, pessimistic, and most likely values."
},

{
    type: "single",
    q: "What is the purpose of project quality management?",
    choices: [
        "To ensure deliverables meet required standards",
        "To reduce project scope",
        "To eliminate project risks",
        "To increase project costs"
    ],
    answer: [0],
    explanation: "Quality management ensures project deliverables meet the required standards."
},

{
    type: "single",
    q: "Which document outlines project roles and responsibilities?",
    choices: [
        "Resource management plan",
        "Scope statement",
        "Risk register",
        "Communication plan"
    ],
    answer: [0],
    explanation: "The resource management plan defines roles and responsibilities for team members."
},

{
    type: "single",
    q: "What is a project deliverable?",
    choices: [
        "A measurable product, service, or result",
        "A project meeting",
        "A stakeholder request",
        "A project schedule"
    ],
    answer: [0],
    explanation: "Deliverables are outputs produced during the project."
},

{
    type: "single",
    q: "What is project initiation?",
    choices: [
        "The process of defining a new project",
        "The final stage of a project",
        "The monitoring stage",
        "A procurement activity"
    ],
    answer: [0],
    explanation: "Initiation defines the project and secures authorization to start it."
},

{
    type: "single",
    q: "What is a dependency in project management?",
    choices: [
        "A relationship between tasks",
        "A project risk",
        "A stakeholder requirement",
        "A cost estimate"
    ],
    answer: [0],
    explanation: "Dependencies determine how tasks are related and scheduled."
},

{
    type: "single",
    q: "What is the purpose of a communication plan?",
    choices: [
        "To define how project information is shared",
        "To track project risks",
        "To define project costs",
        "To record project scope"
    ],
    answer: [0],
    explanation: "Communication plans outline how and when project information is distributed."
},

{
    type: "single",
    q: "Which stakeholder provides overall direction and support for the project?",
    choices: [
        "Project sponsor",
        "Project manager",
        "Vendor",
        "Team lead"
    ],
    answer: [0],
    explanation: "Sponsors provide funding and strategic direction."
},

{
    type: "single",
    q: "What is risk mitigation?",
    choices: [
        "Reducing the probability or impact of a risk",
        "Ignoring project risks",
        "Increasing project scope",
        "Canceling the project"
    ],
    answer: [0],
    explanation: "Risk mitigation reduces the likelihood or impact of risks."
},

{
    type: "single",
    q: "What is project closure?",
    choices: [
        "Completing all project activities and formally ending the project",
        "Stopping project work temporarily",
        "Hiring new staff",
        "Increasing project scope"
    ],
    answer: [0],
    explanation: "Closure finalizes project activities and documents lessons learned."
},

{
    type: "single",
    q: "Which document describes the business need for a project?",
    choices: [
        "Business case",
        "Risk register",
        "Scope statement",
        "Project schedule"
    ],
    answer: [0],
    explanation: "The business case justifies the need for the project."
},

{
    type: "single",
    q: "What is the main objective of stakeholder management?",
    choices: [
        "Engage stakeholders effectively",
        "Reduce project cost",
        "Increase project scope",
        "Control project risks"
    ],
    answer: [0],
    explanation: "Stakeholder management ensures stakeholders remain informed and supportive."
},

{
    type: "single",
    q: "What is the purpose of a project charter?",
    choices: [
        "To formally authorize the project",
        "To close the project",
        "To estimate project costs",
        "To track project risks"
    ],
    answer: [0],
    explanation: "The project charter authorizes the project and appoints the project manager."
},

{
    type: "single",
    q: "What does scope management ensure?",
    choices: [
        "Only required work is included in the project",
        "Project costs increase",
        "Project timelines are removed",
        "Stakeholders are eliminated"
    ],
    answer: [0],
    explanation: "Scope management ensures the project includes only necessary work."
},

{
    type: "single",
    q: "Which process involves verifying deliverables meet requirements?",
    choices: [
        "Quality control",
        "Risk identification",
        "Procurement planning",
        "Schedule planning"
    ],
    answer: [0],
    explanation: "Quality control inspects deliverables to ensure they meet standards."
},

{
    type: "single",
    q: "Which tool identifies project stakeholders visually?",
    choices: [
        "Stakeholder map",
        "Gantt chart",
        "Risk register",
        "Budget report"
    ],
    answer: [0],
    explanation: "Stakeholder maps visualize relationships and influence levels."
},

{
    type: "single",
    q: "What is project execution?",
    choices: [
        "Performing the project work defined in the plan",
        "Planning the project scope",
        "Estimating project costs",
        "Closing project contracts"
    ],
    answer: [0],
    explanation: "Execution is when project tasks are carried out."
},

{
    type: "single",
    q: "What does schedule compression aim to achieve?",
    choices: [
        "Shorten project duration",
        "Increase project cost",
        "Add more scope",
        "Reduce stakeholder involvement"
    ],
    answer: [0],
    explanation: "Schedule compression techniques reduce project duration without reducing scope."
},

{
    type: "single",
    q: "What is a project assumption?",
    choices: [
        "A factor considered true for planning purposes",
        "A confirmed project fact",
        "A project risk",
        "A project deliverable"
    ],
    answer: [0],
    explanation: "Assumptions are factors believed to be true during planning."
},

{
    type: "single",
    q: "Which document tracks project risks and responses?",
    choices: [
        "Risk register",
        "Communication plan",
        "Project schedule",
        "Business case"
    ],
    answer: [0],
    explanation: "The risk register records risks and response strategies."
},

{
    type: "single",
    q: "What is project governance?",
    choices: [
        "Framework that guides project decision-making",
        "A budgeting technique",
        "A scheduling tool",
        "A risk mitigation plan"
    ],
    answer: [0],
    explanation: "Project governance ensures proper oversight and decision-making."
},

{
    type: "single",
    q: "What is project management?",
    choices: [
        "Applying knowledge, skills, tools, and techniques to project activities",
        "Hiring project staff",
        "Reducing project costs",
        "Eliminating project risks"
    ],
    answer: [0],
    explanation: "Project management involves applying methods and tools to achieve project goals."
},

{
    type: "single",
    q: "What is the main goal of project control?",
    choices: [
        "Ensure project performance matches the plan",
        "Increase project cost",
        "Remove stakeholders",
        "Change project objectives"
    ],
    answer: [0],
    explanation: "Project control monitors and adjusts project performance."
}

];
