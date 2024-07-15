<template>
  <div class="contact">
    <div class="contact-text">
      <h1>Tem interesse Ou alguma dúvida?<br />Entre em Contato!</h1>
      <div class="linha-vermelha"></div>
    </div>
    <div class="content-contact">
      <div class="left">
        <img src="../assets/mail.png" alt="mail" class="mail-img" />
      </div>
      <div class="right">
        <div class="card">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <h2>Entre em Contato</h2>
            <label for="name">Nome:</label>
            <input type="text" id="name" v-model="name" required />
            <p v-if="nameError" class="error-message">
              Por favor, insira um nome válido.
            </p>

            <label for="email">E-mail:</label>
            <input type="email" id="email" v-model="email" required />
            <p v-if="emailError" class="error-message">
              Por favor, insira um email válido.
            </p>

            <label for="message">Mensagem:</label>
            <textarea
              id="message"
              v-model="message"
              rows="4"
              required
            ></textarea>

            <p v-if="formError" class="error-message">
              É necessário preencher todos os campos corretamente.
            </p>

            <div class="btn-enviar">
              <button type="submit" class="btn-submit">
                Enviar<i
                  class="fas fa-paper-plane"
                  style="margin-left: 5px"
                ></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const nameError = ref(false)
const emailError = ref(false)
const formError = ref(false)
const successMessage = ref(false)

const handleSubmit = () => {
  nameError.value = false
  emailError.value = false
  formError.value = false

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  let isValid = true

  if (!name.value || name.value.length < 2) {
    nameError.value = true
    isValid = false
  }

  if (!email.value || !email.value.match(emailPattern)) {
    emailError.value = true
    isValid = false
  }

  if (!name.value || !email.value || !message.value) {
    formError.value = true
    isValid = false
  }

  if (isValid) {
    successMessage.value = true
    alert('Mensagem enviada com sucesso!')

    // Limpar os campos do formulário
    name.value = ''
    email.value = ''
    message.value = ''
  }
}
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.contact-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  width: 100%;
  background-color: #171717;
  color: #ffffff;
}

.content-contact {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.right {
  flex: 1;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left {
  flex: 1;
  background-color: #171717;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.card {
  background-color: #212121;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  width: 100%;
  border: 1px solid #b31a1b;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form h2 {
  margin-bottom: 20px;
  text-align: center;
  color: white;
  flex-wrap: wrap;
}

.contact-form label {
  font-weight: bold;
  color: white;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  font-size: 16px;
  background-color: #1d1d1d;
  color: white;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #b31a1b;
  outline: none;
}

.contact-form textarea {
  resize: vertical;
}

.btn-submit {
  background-color: #e01b1b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  gap: 10px;
}

.btn-submit:hover {
  background-color: #b31a1b;
}

.mail-img {
  width: 400px;
  height: auto;
}

.linha-vermelha {
  width: 100px;
  height: 4px;
  background-color: red;
  margin: 10px auto;
}

.error-message {
  font-size: 13px;
  color: #b31a1b;
  margin-top: 5px;
}

.success-message {
  margin-top: 20px;
}

.btn-enviar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

@media (max-width: 750px) {
  .content-contact {
    flex-direction: column;
    align-items: center;
  }

  .left {
    display: none;
  }

  .right {
    width: 100%;
  }

  .card {
    width: 100%;
    margin: 0;
  }
}
</style>
