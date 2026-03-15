export async function fetchEmployeeData() {
  const response = await fetch('https://backend.jotish.in/backend_dev/gettabledata.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'test',
      password: '123456',
    }),
  });

  const data = await response.json();

  return data;
}