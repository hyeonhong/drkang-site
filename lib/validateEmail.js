export function validateEmail(email) {
  const re = /^\S+@\S+$/
  return re.test(email)
}
