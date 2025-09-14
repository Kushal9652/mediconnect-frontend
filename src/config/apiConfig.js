const API_BASE_URL = 'http://localhost:3000'; // Updated to match backend port

export async function createAppointment(data, token) {
  const res = await fetch(`${API_BASE_URL}/api/appointments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to create appointment');
  }
  return res.json();
}

export async function getUserAppointments(token) {
  const res = await fetch(`${API_BASE_URL}/api/appointments`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    }
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch appointments');
  }
  return res.json();
}

// Doctor API functions
export async function getAllDoctors() {
  const res = await fetch(`${API_BASE_URL}/api/doctors`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch doctors');
  }
  return res.json();
}

export async function getDoctorsBySpecialization(specialization) {
  const res = await fetch(`${API_BASE_URL}/api/doctors/specialization/${specialization}`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch doctors by specialization');
  }
  return res.json();
}

export async function getAllSpecializations() {
  const res = await fetch(`${API_BASE_URL}/api/doctors/specializations`);
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Failed to fetch specializations');
  }
  return res.json();
}

export default API_BASE_URL;
