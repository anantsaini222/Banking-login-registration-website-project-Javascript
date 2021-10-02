var bank= {
    salary: 50000,
    deposite: function() {
        this.salary=parseInt( document.getElementById("input1").value)+this.salary;
        document.getElementById("dis1").innerHTML="Money deposited";
    },
    withdrawl: function() {
        this.salary=this.salary-parseInt( document.getElementById("input2").value);
        document.getElementById("dis2").innerHTML="Money Withdrawn";
      },
    current:function()
    {
        document.getElementById("dis3").innerHTML="Current Balance ="+this.salary;
    }
  };