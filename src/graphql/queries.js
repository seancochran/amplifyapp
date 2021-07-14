/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAgent = /* GraphQL */ `
  query GetAgent($id: ID!) {
    getAgent(id: $id) {
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
export const listAgents = /* GraphQL */ `
  query ListAgents(
    $filter: TableAgentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
