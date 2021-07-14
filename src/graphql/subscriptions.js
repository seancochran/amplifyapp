/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAgent = /* GraphQL */ `
  subscription OnCreateAgent(
    $first_name: String
    $full_name: String
    $id: ID
    $last_name: String
    $username: String
  ) {
    onCreateAgent(
      first_name: $first_name
      full_name: $full_name
      id: $id
      last_name: $last_name
      username: $username
    ) {
      bilingual
      current_quartile
      current_region
      department
      email
      employee_id
      enhanced_lead_tier
      first_name
      full_name
      group_id
      hire_date
      id
      language
      last_name
      lastname_firstname
      lead_source
      licensed_state
      location
      mobile_phone
      nice_agent_id
      other_phone
      position
      preferred_name
      status
      team
      username
      velocify_agent_id
      work_phone
    }
  }
`;
export const onDeleteAgent = /* GraphQL */ `
  subscription OnDeleteAgent(
    $first_name: String
    $full_name: String
    $id: ID
    $last_name: String
    $username: String
  ) {
    onDeleteAgent(
      first_name: $first_name
      full_name: $full_name
      id: $id
      last_name: $last_name
      username: $username
    ) {
      bilingual
      current_quartile
      current_region
      department
      email
      employee_id
      enhanced_lead_tier
      first_name
      full_name
      group_id
      hire_date
      id
      language
      last_name
      lastname_firstname
      lead_source
      licensed_state
      location
      mobile_phone
      nice_agent_id
      other_phone
      position
      preferred_name
      status
      team
      username
      velocify_agent_id
      work_phone
    }
  }
`;
export const onUpdateAgent = /* GraphQL */ `
  subscription OnUpdateAgent(
    $first_name: String
    $full_name: String
    $id: ID
    $last_name: String
    $username: String
  ) {
    onUpdateAgent(
      first_name: $first_name
      full_name: $full_name
      id: $id
      last_name: $last_name
      username: $username
    ) {
      bilingual
      current_quartile
      current_region
      department
      email
      employee_id
      enhanced_lead_tier
      first_name
      full_name
      group_id
      hire_date
      id
      language
      last_name
      lastname_firstname
      lead_source
      licensed_state
      location
      mobile_phone
      nice_agent_id
      other_phone
      position
      preferred_name
      status
      team
      username
      velocify_agent_id
      work_phone
    }
  }
`;
