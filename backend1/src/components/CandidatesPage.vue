<template>
  <div>
    <!-- Add your template content here -->
     <h1> Candidates Page  </h1>
  </div>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify';
import { listCandidates } from '@/graphql/queries';

export default {
  async mounted() {
    try {
      const response = await API.graphql(graphqlOperation(listCandidates));
      console.log('Candidates data:', response.data.listCandidates.items);
      // Save the retrieved data to a component data property and use it in the template
    } catch (error) {
      console.error('Error fetching candidates:', error);
      // Handle error or display an error message
    }
  },
};
</script>

