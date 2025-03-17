<template lang="pug">
form.contact-form(@submit.prevent="validateForm")

    .form-group-wrapper
        .form-group
            label.form-label(for='name') {{ $t("contact.form.name") }}
            input#name.form-input(type='text' :placeholder='$t("contact.form.namesurname")', v-model='formData.name')
            .error-message(v-if='formDataErrors.name != "ok"')
                span.text-danger {{ formDataErrors.name }}

        .form-group
            label.form-label(for='email') {{ $t("contact.form.email") }}
            input#email.form-input(type='text' :placeholder='emailPlaceholder', v-model='formData.email')
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
          input#accept(type="checkbox" v-model="formData.termsAccepted")
          |
          |
          p {{ $t("contact.form.terms") }}
        .error-message(v-if='formDataErrors.termsAccepted != "ok"')
            span.text-danger {{ formDataErrors.termsAccepted }}
    .submit-wrapper
        CButton(type='submit', :text='$t("contact.form.send")', customClass='primary')
</template>
<script setup lang="ts">
import type { ContactForm } from '@/types/_types'
import { computed, ref } from 'vue'
import CButton from '@/components/common/CButton.vue'
// import FormGroup from './FormGroup.vue'
import { useI18n } from 'vue-i18n'
import { useLangStore } from '@/stores/lang'
import Swal from 'sweetalert2'
import { sendEmail } from '@/utils/emailService'

const { t } = useI18n()
const lang = useLangStore()

const responseMessage = ref<string>('')
const loading = ref<boolean>(false)

const emailEs = ref('nombre@ejemplo.com')
const emailEn = ref('name@example.com')

const formData = ref<ContactForm>({
  name: '',
  email: '',
  via: '',
  otherVia: '',
  message: '',
  termsAccepted: null,
})

const formDataErrors = ref<Record<string, string>>({
  name: '',
  email: '',
  via: '',
  message: '',
  termsAccepted: '',
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
    const response = await sendEmail(formData.value)
    localStorage.setItem('contact-form', JSON.stringify(formData.value))
    if (response.status === 200) {
      Swal.fire({
        title: t('contact.form.modal-title-sc'),
        text: response.data.message,
        icon: 'success',
        confirmButtonText: t('contact.form.modal-confirm-btn'),
      })
      resetForm()
    }
  } catch (error: any) {
    const errorMessage = error.response.data.error
      ? error.response.data.error
      : t('contact.form.modal-text-err')
    Swal.fire({
      title: t('contact.form.modal-title-err'),
      text: errorMessage,
      icon: 'error',
      confirmButtonText: t('contact.form.modal-confirm-btn'),
    })
  }
  loading.value = false
}

function validateForm() {
  const { name, email, via, message, termsAccepted } = formData.value
  validateName(name)
  validateEmail(email)
  validateVia(via)
  validateMessage(message)
  validateAccept(termsAccepted)

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

function validateAccept(acc: string | null | boolean) {
  if (acc === null || acc === false)
    formDataErrors.value.termsAccepted = t('contact.form.terms-error')
  else formDataErrors.value.termsAccepted = 'ok'
}

function resetForm() {
  formData.value = {
    name: '',
    email: '',
    via: '',
    otherVia: '',
    message: '',
    termsAccepted: null,
  }
  formDataErrors.value = {
    name: '',
    email: '',
    via: '',
    message: '',
    termsAccepted: '',
  }
}
</script>
