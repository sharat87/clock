const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

function tick() {
	document.documentElement.style.height = (window.innerHeight - 1) + "px"

	const today = new Date()
	const y = today.getFullYear()
	const mo = MONTHS[today.getMonth()]
	const d = today.getDate()
	const h = today.getHours() % 12 || 12
	const m = pad(today.getMinutes())
	const s = pad(today.getSeconds())
	const meridian = today.getHours() >= 12 ? "PM" : "AM"

	document.getElementById("time").innerHTML = `${h}:${m} <small>${meridian}</small>`
	document.getElementById("date").innerHTML = `${WEEKDAYS[today.getDay()]}, ${d} ${mo}`

	document.body.classList[isDark(today) ? "add" : "remove"]("dark")
}

function isDark(date) {
	const h = date.getHours();
	return h >= 18 || h < 6
}

function pad(n) {
	return n < 10 ? "0" + n : n
}

setInterval(tick, 500)
