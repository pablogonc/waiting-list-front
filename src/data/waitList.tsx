type WaitlistItem = {
    clientName: string;
    position: number;
    estimatedTime: number; // Podrías manejar esto en minutos
    waitedTime: number; // También en minutos
    state: 'waiting' | 'inProgress' | 'exit';
  };
  
  const waitlist: WaitlistItem[] = [
    {
      clientName: "John Doe",
      position: 1,
      estimatedTime: 15,
      waitedTime: 5,
      state: "waiting",
    },
    {
      clientName: "Jane Smith",
      position: 2,
      estimatedTime: 20,
      waitedTime: 10,
      state: "waiting",
    },
    {
      clientName: "Michael Brown",
      position: 3,
      estimatedTime: 25,
      waitedTime: 15,
      state: "inProgress",
    },
    {
      clientName: "Emily Johnson",
      position: 4,
      estimatedTime: 30,
      waitedTime: 20,
      state: "exit",
    },
  ];
  
  export default waitlist;