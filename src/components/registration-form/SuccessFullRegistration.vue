<template>
  <div class="success-reg-wrapper">
    <div class="success-reg-header">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
      >
        <path
          d="M26.8597 52C41.1859 52 52.7969 40.3609 52.7969 26C52.7969 11.6391 41.1859 0 26.8597 0C12.5335 0 0.922607 11.6391 0.922607 26C0.922607 40.3609 12.5335 52 26.8597 52ZM38.3085 21.2266L25.34 34.2266C24.3876 35.1813 22.8476 35.1813 21.9053 34.2266L15.4211 27.7266C14.4687 26.7719 14.4687 25.2281 15.4211 24.2836C16.3734 23.3391 17.9134 23.3289 18.8557 24.2836L23.6176 29.057L34.8638 17.7734C35.8161 16.8188 37.3562 16.8188 38.2984 17.7734C39.2407 18.7281 39.2508 20.2719 38.2984 21.2164L38.3085 21.2266Z"
          fill="#31B63B"
        />
      </svg>
      <div>Registration Successful</div>
    </div>
    <div class="success-reg-description">
      &#10148; Thank you for registering for our event with XM. You will receive an email shortly
      with confirmation of your registration
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessFullRegistration'
}
</script>

<style scoped>
.success-reg-wrapper {
  max-height: 211px;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid #31b63b;
  background: #f3fef4;
  padding: 47px 32px;
  margin-bottom: 25px;
}

.success-reg-header {
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: #3c763d;
  margin-bottom: 32px;
  gap: 15px;
  align-items: center;
}

.success-reg-description {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #3c763d;
  margin-bottom: 62px;
}
</style>
