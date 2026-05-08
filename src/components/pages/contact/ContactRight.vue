<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const form = ref<HTMLFormElement | null>(null);
const isSending = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

async function sendEmail() {
    if (!form.value) return;

    isSending.value = true;
    successMessage.value = "";
    errorMessage.value = "";

    try {
        await emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            form.value,
            {
                publicKey: "YOUR_PUBLIC_KEY",
            },
        );

        successMessage.value = "Your message has been sent successfully.";
        form.value.reset();
    } catch {
        errorMessage.value = "Something went wrong while sending your message.";
    } finally {
        isSending.value = false;
    }
}
</script>

<template>
    <div class="contact-style contact-section__right">
        <form ref="form" @submit.prevent="sendEmail">
            <div class="contact-form">
                <div class="two-input-field">
                    <div class="single__input">
                        <label class="textXL label__style" for="name"
                            >Name</label
                        >
                        <input
                            class="input-field-style"
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div class="single__input">
                        <label class="textXL label__style" for="email"
                            >Email</label
                        >
                        <input
                            class="input-field-style"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                        />
                    </div>
                </div>

                <div class="two-input-field">
                    <div class="single__input">
                        <label class="textXL label__style" for="phone"
                            >Phone Optional</label
                        >
                        <input
                            class="input-field-style"
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Your phone"
                        />
                    </div>

                    <div class="single__input">
                        <label class="textXL label__style" for="subject"
                            >Subject</label
                        >
                        <input
                            class="input-field-style"
                            id="subject"
                            type="text"
                            name="subject"
                            placeholder="Your subject"
                            required
                        />
                    </div>
                </div>

                <div class="single__input">
                    <label class="textXL label__style" for="message"
                        >Message</label
                    >
                    <textarea
                        class="input-field-style"
                        id="message"
                        rows="8"
                        name="message"
                        placeholder="Type your message"
                        required
                    ></textarea>
                </div>
            </div>

            <p v-if="successMessage">{{ successMessage }}</p>
            <p v-if="errorMessage">{{ errorMessage }}</p>

            <div class="m-t-40px">
                <button
                    class="see-all-blog"
                    type="submit"
                    :disabled="isSending"
                >
                    <span class="textM post-comment light-theme-white-text">
                        {{ isSending ? "Sending..." : "Submit Now" }}
                    </span>
                </button>
            </div>
        </form>
    </div>
</template>
