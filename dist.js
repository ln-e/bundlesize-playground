{
  "@context": "/api/contexts/Task",
    "@id": "/api/projects/1/closed_tasks",
    "@type": "hydra:Collection",
    "hydra:member": [
  {
    "@id": "/api/tasks/6",
    "@type": "Task",
    "id": 6,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 6",
    "description": null,
    "position": 0,
    "branch": "/api/task_branches/3",
    "creator": "/api/users/1"
  },
  {
    "@id": "/api/tasks/5",
    "@type": "Task",
    "id": 5,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 5",
    "description": null,
    "position": 4,
    "branch": "/api/task_branches/1",
    "creator": "/api/users/1"
  },
  {
    "@id": "/api/tasks/4",
    "@type": "Task",
    "id": 4,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 4",
    "description": null,
    "position": 3,
    "branch": "/api/task_branches/1",
    "creator": "/api/users/1"
  },
  {
    "@id": "/api/tasks/3",
    "@type": "Task",
    "id": 3,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 3",
    "description": null,
    "position": 2,
    "branch": "/api/task_branches/1",
    "creator": "/api/users/1"
  }
],
    "hydra:totalItems": 4,
    "hydra:search": {
  "@type": "hydra:IriTemplate",
      "hydra:template": "/api/projects/1/closed_tasks{?branch,branch[],closed,order[updatedAt]}",
      "hydra:variableRepresentation": "BasicRepresentation",
      "hydra:mapping": [
    {
      "@type": "IriTemplateMapping",
      "variable": "branch",
      "property": "branch",
      "required": false
    },
    {
      "@type": "IriTemplateMapping",
      "variable": "branch[]",
      "property": "branch",
      "required": false
    },
    {
      "@type": "IriTemplateMapping",
      "variable": "closed",
      "property": "closed",
      "required": false
    },
    {
      "@type": "IriTemplateMapping",
      "variable": "order[updatedAt]",
      "property": "updatedAt",
      "required": false
    }
  ]
}
}
"""
The json is equal to:
{
  "@context": "/api/contexts/Task",
    "@id": "/api/projects/1/closed_tasks",
    "@type": "hydra:Collection",
    "hydra:member": [
  {
    "@id": "/api/tasks/6",
    "@type": "Task",
    "id": 6,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 6",
    "description": null,
    "position": 0,
    "branch": "/api/task_branches/3",
    "creator": "/api/users/1"
  },
  {
    "@id": "/api/tasks/5",
    "@type": "Task",
    "id": 5,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 5",
    "description": null,
    "position": 4,
    "branch": "/api/task_branches/1",
    "creator": "/api/users/1"
  },
  {
    "@id": "/api/tasks/4",
    "@type": "Task",
    "id": 4,
    "deadline": null,
    "startDate": null,
    "closed": true,
    "assignee": null,
    "project": "/api/projects/1",
    "name": "Dummy task 4",
    "description": null,
    "position": 3,
    "branch": "/api/task_branches/1",
    "creator": "/api/users/1"
  },
  {
    "startDate": null
  }
],
    "hydra:totalItems": 3,
    "hydra:search": {
  "@type": "hydra:IriTemplate",
      "hydra:template": "/api/projects/1/closed_tasks{?branch,branch[],closed,order[updatedAt]}",
      "hydra:variableRepresentation": "BasicRepresentation",
      "hydra:mapping": [
    {
      "@type": "IriTemplateMapping",
      "variable": "branch",
      "property": "branch",
      "required": false
    },
    {
      "@type": "IriTemplateMapping",
      "variable": "branch[]",
      "property": "branch",
      "required": false
    },
    {
      "@type": "IriTemplateMapping",
      "variable": "closed",
      "property": "closed",
      "required": false
    },
    {
      "@type": "IriTemplateMapping",
      "variable": "order[updatedAt]",
      "property": "updatedAt",
      "required": false
    }
  ]
}
}
