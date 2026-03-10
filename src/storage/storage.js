const initializeUsers = () => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const adminExists = users.some((u) => u.email === "admin@example.com");
  if (!adminExists) {
    const defaultAdmin = {
      id: Date.now().toString(),
      name: "Admin",
      email: "admin@example.com",
      password: "admin123",
      phoneNumber: "00000000",
      role: "admin",
      joined: new Date().toISOString(),
    };
    users.push(defaultAdmin);

    localStorage.setItem("users", JSON.stringify(users));
  }
};

initializeUsers();

export const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));
export const addUser = (user) => {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
};
export const getUserByEmail = (email) =>
  getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
export const validateLogin = (email, password) => {
  const user = getUserByEmail(email);
  if (!user) return { success: false, message: "User not found" };
  if (user.password !== password)
    return { success: false, message: "Invalid password" };
  return { success: true, user };
};

export const loginUser = (email, password) => {
  const users = getUsers();
  return users.find((u) => u.email === email && u.password === password);
};

export const getAdmins = () => {
  return getUsers().filter((u) => u.role?.toLowerCase() === "admin");
};

export const getInterns = () => {
  return getUsers().filter((u) => u.role?.toLowerCase() === "intern");
};

export const getNormalUsers = () => {
  return getUsers().filter((u) => u.role?.toLowerCase() === "user");
};

export const getInternSubmissions = () =>
  JSON.parse(localStorage.getItem("intern_submissions") || "[]");
export const addInternSubmission = (submission) => {
  const submissions = getInternSubmissions();
  submissions.push(submission);
  localStorage.setItem("intern_submissions", JSON.stringify(submissions));
};
export const removeInternSubmission = (id) => {
  const submissions = getInternSubmissions();
  const updated = submissions.filter((s) => s.id !== id);
  localStorage.setItem("intern_submissions", JSON.stringify(updated));
  return updated;
};

export const acceptInternSubmission = (id) => {
  const submissions =
    JSON.parse(localStorage.getItem("intern_submissions")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const submissionIndex = submissions.findIndex((s) => s.id === id);
  if (submissionIndex === -1) return submissions;

  const submission = submissions[submissionIndex];

  const existingUserIndex = users.findIndex(
    (u) => u.email === submission.email
  );

  if (existingUserIndex !== -1) {
    users[existingUserIndex] = {
      ...users[existingUserIndex],
      role: "intern",
      phoneNumber: submission.phone,
    };
  } else {
    users.push({
      id: submission.id.toString(),
      name: submission.fullName,
      email: submission.email,
      password: "",
      phoneNumber: submission.phone,
      role: "intern",
      joined: submission.joined,
    });
  }

  submissions.splice(submissionIndex, 1);

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("intern_submissions", JSON.stringify(submissions));

  return submissions;
};

/////pubs

export const initializePublications = () => {
  const publications = JSON.parse(localStorage.getItem("publications") || "[]");

  if (publications.length === 0) {
    localStorage.setItem("publications", JSON.stringify([]));
  }
};

export const getPublications = () =>
  JSON.parse(localStorage.getItem("publications") || "[]");

export const savePublications = (pubs) =>
  localStorage.setItem("publications", JSON.stringify(pubs));

export const addPublication = (pub) => {
  const pubs = getPublications();
  pubs.push(pub);
  savePublications(pubs);
};

export const updatePublication = (id, updatedPub) => {
  const pubs = getPublications();
  const newPubs = pubs.map((p) => (p.id === id ? { ...p, ...updatedPub } : p));
  savePublications(newPubs);
};

export const deletePublication = (id) => {
  const pubs = getPublications();
  const newPubs = pubs.filter((p) => p.id !== id);
  savePublications(newPubs);
};

///roadmapss

export const initializeRoadmaps = () => {
  const roadmaps = JSON.parse(localStorage.getItem("roadmaps") || "[]");
  if (roadmaps.length === 0) {
    localStorage.setItem("roadmaps", JSON.stringify([]));
  }
};

export const getRoadmaps = () =>
  JSON.parse(localStorage.getItem("roadmaps") || "[]");

export const saveRoadmaps = (roadmaps) =>
  localStorage.setItem("roadmaps", JSON.stringify(roadmaps));

export const addRoadmap = (roadmap) => {
  const roadmaps = getRoadmaps();
  const newRoadmap = { ...roadmap, id: Date.now().toString() };
  roadmaps.push(newRoadmap);
  saveRoadmaps(roadmaps);

  const users = getUsers();
  const interns = users.filter((u) => u.role.toLowerCase() === "intern");
  interns.forEach((intern) => {
    let userRoadmaps = JSON.parse(
      localStorage.getItem(`roadmaps_${intern.id}`) || "[]"
    );
    userRoadmaps.push(newRoadmap);
    localStorage.setItem(`roadmaps_${intern.id}`, JSON.stringify(userRoadmaps));
  });

  return roadmaps;
};

export const updateRoadmap = (id, updatedRoadmap) => {
  const roadmaps = getRoadmaps();
  const newRoadmaps = roadmaps.map((r) =>
    r.id === id ? { ...r, ...updatedRoadmap } : r
  );
  saveRoadmaps(newRoadmaps);

  const users = getUsers();
  users
    .filter((u) => u.role.toLowerCase() === "intern")
    .forEach((intern) => {
      let userRoadmaps = JSON.parse(
        localStorage.getItem(`roadmaps_${intern.id}`) || "[]"
      );
      userRoadmaps = userRoadmaps.map((r) =>
        r.id === id ? { ...r, ...updatedRoadmap } : r
      );
      localStorage.setItem(
        `roadmaps_${intern.id}`,
        JSON.stringify(userRoadmaps)
      );
    });

  return newRoadmaps;
};

export const deleteRoadmap = (id) => {
  const roadmaps = getRoadmaps();
  const newRoadmaps = roadmaps.filter((r) => r.id !== id);
  saveRoadmaps(newRoadmaps);

  const users = getUsers();
  users
    .filter((u) => u.role.toLowerCase() === "intern")
    .forEach((intern) => {
      let userRoadmaps = JSON.parse(
        localStorage.getItem(`roadmaps_${intern.id}`) || "[]"
      );
      userRoadmaps = userRoadmaps.filter((r) => r.id !== id);
      localStorage.setItem(
        `roadmaps_${intern.id}`,
        JSON.stringify(userRoadmaps)
      );
    });

  return newRoadmaps;
};
