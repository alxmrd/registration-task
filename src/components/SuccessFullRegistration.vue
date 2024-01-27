<template>
  <div class="success-reg-wrapper">
    <div class="success-reg-header"> Registration Successful</div>
    <div class="success-reg-description">&#10148; Thank you for registering for our event with XM. You will receive an
      email shortly with confirmation of your registration</div>
  </div>
</template>

<script>
export default {
  name: 'SuccessFullRegistration',
};
</script>

<style scoped>
.success-reg-wrapper {
  max-height: 211px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #31B63B;
  background: #F3FEF4;
  padding: 47px 32px;
  margin-bottom: 25px;

}

.success-reg-header {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #3C763D;
  margin-bottom: 32px;
}

.success-reg-description {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #3C763D;
  margin-bottom: 62px;
}
</style>