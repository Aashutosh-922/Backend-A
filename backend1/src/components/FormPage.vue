import { API, graphqlOperation } from 'aws-amplify';
import { createPost } from '@/graphql/mutations';

methods: {
  async submitForm() {
    try {
      const response = await API.graphql(
        graphqlOperation(createPost, { input: this.form })
      );
      console.log('New post created:', response.data.createPost);
      // Handle success or display a success message
    } catch (error) {
      console.error('Error creating post:', error);
      // Handle error or display an error message
    }
  }
}

<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-4">Job Application Form</h1>
    <form @submit.prevent="submitForm" class="w-1/2">
      <div class="mb-4">
        <label for="name" class="block font-bold mb-2">Name</label>
        <input type="text" id="name" v-model="form.name" class="border rounded px-4 py-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="email" class="block font-bold mb-2">Email</label>
        <input type="email" id="email" v-model="form.email" class="border rounded px-4 py-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="message" class="block font-bold mb-2">Message</label>
        <textarea id="message" v-model="form.message" class="border rounded px-4 py-2 w-full" rows="4" required></textarea>
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
  </div>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify';
import { createApplication } from '@/graphql/mutations';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        await API.graphql(graphqlOperation(createApplication, { input: this.form }));
        alert('Application submitted successfully!');
        this.form = {
          name: '',
          email: '',
          message: ''
        };
      } catch (error) {
        console.error('Error submitting application:', error);
        alert('An error occurred while submitting the application. Please try again later.');
      }
    }
  }
};
</script>
