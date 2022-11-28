<template>
  <div class="home">
    <div class="pt-16 ma-auto text-center">
      <h1>SENDMAIL</h1>
    </div>
    <MailForm />
  </div>
</template>

<script>
import MailForm from '@/components/MailForm.vue';

export default {
  name: 'Home',
  components: {
    MailForm,
  },
};
</script>
