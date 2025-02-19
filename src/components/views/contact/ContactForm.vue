<template lang="pug">
form.contact-form(@submit.prevent="submit")
    .form-group-wrapper
        .form-group
            label.form-label(for='name') Name
            input#name.form-input(type='text' placeholder='Name and surname', v-model='formData.name')
            .error-message(v-if='formDataErrors.name != "ok"')
                i.fa-solid.fa-triangle-exclamation.text-danger
                span.text-danger {{ formDataErrors.name }}
        .form-group
            label.form-label(for='email') Email
            input#name.form-input(type='text' placeholder='name@example.com', v-model='formData.email')
            .error-message(v-if='formDataErrors.email != "ok"')
                i.fa-solid.fa-triangle-exclamation.text-danger
                span.text-danger {{ formDataErrors.email }}
        
    .form-group-wrapper
        .form-group
            label.form-label(for='vias') Where did you hear about us?
            select#vias.form-input(v-model='formData.via')
                option(selected='') Choose...
                option Social Media (Facebook, Instagram, LinkedIn, etc.)
                option Online Search (Google, Bing, etc.)
                option Event or Conference
                option Other
            .error-message(v-if='formDataErrors.via != "ok"')
                i.fa-solid.fa-triangle-exclamation.text-danger
                span.text-danger {{ formDataErrors.via }}
        .form-group(v-if='isOtherOption')
            label.form-label(for='otherVia')  Could you tell us where? (Optional)
            input#otherVia.form-input(type='text' placeholder='Other via', v-model='formData.otherVia')
    .form-group-wrapper
        .form-group
            label.form-label(for='message') Message
            textarea#message.form-input(rows='3', placeholder='Type here your message', v-model='formData.message')
            .error-message(v-if='formDataErrors.message != "ok"')
                i.fa-solid.fa-triangle-exclamation.text-danger
                span.text-danger {{ formDataErrors.message }}
    .form-group-wrapper
        input#accept(type="checkbox" v-model="formData.accept")
        |
        |
        p I agree to the terms and conditions
        .error-message(v-if='formDataErrors.accept != "ok"')
            i.fa-solid.fa-triangle-exclamation.text-danger
            span.text-danger {{ formDataErrors.accept }}
    .submit-wrapper
        button.btn.btn-primary(type='submit',  @click="validateForm") Send
</template>
<script setup lang="ts">
// import type { ContactForm } from '@/@types/_types';
import { computed, ref } from 'vue'
// import FormGroup from './FormGroup.vue'

const responseMessage = ref<string>('')
const loading = ref<boolean>(false)

// const formData = ref<ContactForm>({
const formData = ref({
  name: '',
  email: '',
  via: '',
  otherVia: '',
  message: '',
  accept: false,
})

const formDataErrors = ref<Record<string, string>>({
  name: 'ok',
  email: 'ok',
  via: 'ok',
  message: 'ok',
  accept: 'ok',
})

const isOtherOption = computed(() => {
  if (formData.value.via === 'Other') return true
  else return false
})

const toggle = () => {
  console.log('toogle')

  // showModal.value = !showModal.value;
}

async function submitForm() {
  loading.value = true
  try {
    // const response = await fetch('http://localhost:3000/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData.value)
    // });
    // const data = await response.json();
    // responseMessage.value = data.message;
    localStorage.setItem('contact-form', JSON.stringify(formData.value))
    toggle()
  } catch (error) {
    responseMessage.value = 'Error sending the form.'
  }
  loading.value = false
}

function validateForm() {
  const { name, email, via, message, accept } = formData.value
  validateName(name)
  validateEmail(email)
  validateVia(via)
  validateMessage(message)
  validateAccept(accept)

  const allOk = Object.values(formDataErrors.value).every((value) => value === 'ok')
  if (allOk) {
    submitForm()
  }
}

function validateName(name: string) {
  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,50}$/
  if (name === '') formDataErrors.value.name = 'Name is required'
  else if (!namePattern.test(name)) formDataErrors.value.name = 'Please, enter a valid name'
  else formDataErrors.value.name = 'ok'
}

function validateEmail(email: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (email === '') formDataErrors.value.email = 'E-mail is required'
  else if (!emailPattern.test(email)) formDataErrors.value.email = 'Please, enter a valid email'
  else formDataErrors.value.email = 'ok'
}

function validateVia(via: string) {
  if (via === '') formDataErrors.value.via = 'Please, choose an option'
  else formDataErrors.value.via = 'ok'
}

function validateMessage(msg: string) {
  if (msg === '')
    formDataErrors.value.message = 'Please, explain what your inquire is so that we can help you'
  else formDataErrors.value.message = 'ok'
}

function validateAccept(acc: boolean) {
  if (acc === false) formDataErrors.value.accept = 'This field is required and must not be blank'
  else formDataErrors.value.accept = 'ok'
}
</script>
