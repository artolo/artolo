<template>
  <form class="form_contactform" @submit.prevent="sendEmail">
    <fieldset>
      <legend>Formularz kontaktowy</legend>
      <div>
        <label class="form_contactform_label" for="name">Imię i nazwisko</label>
        <input type="text" name="name" id="name" required="" v-model="name">
      </div>
      <div>
        <label class="form_contactform_label" for="email">E-mail</label>
        <input type="email" name="email" id="email" required=""
               :class="{ email , error: !email.valid }"
               v-model="email.value">
      </div>
      <div>
        <p class="form_contactform_select">
          <label class="form_contactform_label">
            Co cię interesuje?
            <select class="form_contactform_label_option" v-model="selection.member">
              <option value="0">Strona WWW</option>
              <option value="1">Sklep internetowy</option>
              <option value="2">Grafika</option>
              <option value="3">Zdjęcia produktowe</option>
              <option value="4">Inne</option>
            </select>
          </label>
        </p>
      </div>
      <div>
        <label
          class="form_contactform_label"
          for="textarea">
          Treść wiadomości:
        </label>
        <textarea
          class="form_contactform_message"
          name="message"
          id="textarea"
          required=""
          v-model="message.text"
          :maxlength="message.maxlength">
        </textarea>
        <span class="form_contactform_counter">
          {{ message.text.length }} / {{ message.maxlength }}
        </span>
      </div>
      <div>
        <input type="submit" value="Send">
      </div>
    </fieldset>
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

// eslint-disable-next-line no-useless-escape
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default {
  name: 'FormContactform',
  data() {
    return {
      name: '',
      email: {
        value: '',
        valid: true,
      },
      selection: {
        member: '0',
      },
      message: {
        text: '',
        maxlength: 400,
      },
    };
  },
  methods: {
    sendEmail: (data) => {
      emailjs.sendForm('artolo.bartosz.bracel@gmail.com', 'template_rlZd5iix', data.target, 'user_0TSbTyFd1LGL6A9a8mlJM')
        .then((result) => {
          console.log('Wiadomość wysłana', result.status, result.text);
          window.location.reload();
        }, (error) => {
          console.log('Błąd', error);
        });
    },
    validate(type, value) {
      if (type === 'email') {
        this.email.valid = !!this.isEmail(value);
      }
    },
    isEmail(value) {
      return emailRegExp.test(value);
    },
  },
  watch: {
    email(value) {
      if (this.sendEmail()) {
        this.validate('email', value);
      }
    },
  },
};
</script>

<style lang="scss">
  @import "~@/assets/scss/form/_formcontactform.scss";
</style>
