<template lang="pug">
form.contact-form(@submit.prevent="submit")
    .form-group-wrapper
        .form-group
            label.form-label(for='name') {{ $t("contact.form.name") }}
            input#name.form-input(type='text' :placeholder='$t("contact.form.namesurname")', v-model='formData.name')
            .error-message(v-if='formDataErrors.name != "ok"')

                span.text-danger {{ formDataErrors.name }}
        .form-group
            label.form-label(for='email') {{ $t("contact.form.email") }}
            input#name.form-input(type='text' :placeholder='emailPlaceholder', v-model='formData.email')
            .error-message(v-if='formDataErrors.email != "ok"')

                span.text-danger {{ formDataErrors.email }}

    .form-group-wrapper
        .form-group
            label.form-label(for='vias') {{ $t("contact.form.hear") }}
            select#vias.form-input(v-model='formData.via')
                option(selected='') {{ $t("contact.form.choose") }}
                option {{ $t("contact.form.op-social") }}
                option {{ $t("contact.form.op-search") }}
                option {{ $t("contact.form.op-recommendation") }}
                option {{ $t("contact.form.op-other") }}
            .error-message(v-if='formDataErrors.via != "ok"')

                span.text-danger {{ formDataErrors.via }}
        .form-group(v-if='isOtherOption')
            label.form-label(for='otherVia')  {{ $t("contact.form.op-where") }}
            input#otherVia.form-input(type='text' :placeholder='$t("contact.form.op-via")', v-model='formData.otherVia')
    .form-group-wrapper
        .form-group
            label.form-label(for='message') {{ $t("contact.form.message") }}
            textarea#message.form-input(rows='3', :placeholder='$t("contact.form.message-ph")', v-model='formData.message')
            .error-message(v-if='formDataErrors.message != "ok"')
                span.text-danger {{ formDataErrors.message }}
    .form-group-wrapper.conditions
        .input-wrapper
          input#accept(type="checkbox" v-model="formData.accept")
          |
          |
          p {{ $t("contact.form.terms") }}
        .error-message(v-if='formDataErrors.accept != "ok"')
            span.text-danger {{ formDataErrors.accept }}
    .submit-wrapper
        CButton(type='submit', @click="validateForm", :text='$t("contact.form.send")', customClass='primary')
</template>
<script setup lang="ts">
// import type { ContactForm } from '@/@types/_types';
import { computed, ref } from 'vue'
import CButton from '@/components/common/CButton.vue'
// import FormGroup from './FormGroup.vue'
import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/stores/lang'
import Swal from 'sweetalert2'

const { t } = useI18n()
const lang = useLangStore()

const responseMessage = ref<string>('')
const loading = ref<boolean>(false)

const emailEs = ref('nombre@ejemplo.com')
const emailEn = ref('name@example.com')

// const formData = ref<ContactForm>({
const formData = ref({
  name: '',
  email: '',
  via: '',
  otherVia: '',
  message: '',
  accept: null,
})

const formDataErrors = ref<Record<string, string>>({
  name: 'ok',
  email: 'ok',
  via: 'ok',
  message: 'ok',
  accept: 'ok',
})

const emailPlaceholder = computed(() => {
  if (lang.currentLang === 'es') return emailEs.value
  else return emailEn.value
})

const isOtherOption = computed(() => {
  if (formData.value.via === t('contact.form.op-other')) return true
  else return false
})

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
    Swal.fire({
      title: t('contact.form.modal-title'),
      text: t('contact.form.modal-text')!,
      icon: 'success',
    })
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
  if (name === '') formDataErrors.value.name = t('contact.form.name-error-1')
  else if (!namePattern.test(name)) formDataErrors.value.name = t('contact.form.name-error-2')
  else formDataErrors.value.name = 'ok'
}

function validateEmail(email: string) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (email === '') formDataErrors.value.email = t('contact.form.email-error-1')
  else if (!emailPattern.test(email)) formDataErrors.value.email = t('contact.form.email-error-2')
  else formDataErrors.value.email = 'ok'
}

function validateVia(via: string) {
  if (via === '') formDataErrors.value.via = t('contact.form.hear-error')
  else formDataErrors.value.via = 'ok'
}

function validateMessage(msg: string) {
  if (msg === '') formDataErrors.value.message = t('contact.form.message-error')
  else formDataErrors.value.message = 'ok'
}

function validateAccept(acc: boolean | null) {
  // TO FIX!!
  console.log('acc', acc)
  if (acc === null || false) formDataErrors.value.accept = t('contact.form.terms-error')
  // if (acc === false)
  else formDataErrors.value.accept = 'ok'
}
</script>
