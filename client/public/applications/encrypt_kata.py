from tkinter import *


class Encryp_kata:
    
    def __init__(self, *args, **kwargs):
        super(Encryp_kata, self).__init__(*args, **kwargs)

        self.root   = Tk()
        self.root.title("Encrypt Kata")
        self.root.geometry("700x600")
        self.root.config(bg="ivory3")
        self.main()
        self.root.minsize(700,550)
        self.root.maxsize(800,650)
        self.Hasil.bind()
        self.root.mainloop()

    def Encrypt(self,kata):
        kata = kata.lower()
        kata_hasil = ""
        for i in kata:
            if (ord(i) == 32):
                kata_hasil = kata_hasil + i
            elif (ord(i) > 109):
                sisa = ord(i) - 24
                kata_hasil = kata_hasil + chr((sisa + 11))
            else:
                hasil = ord(i) + 13
                kata_hasil = kata_hasil + chr(hasil)
        return kata_hasil

    def update(self):
        kata_dapat = self.inputUSer.get("1.0",END)
        kataEncryp = self.Encrypt(kata_dapat)
        self.Hasil.delete("1.0",END)
        self.Hasil.insert(END,kataEncryp)
        self.root.after(5000,self.update)

    def main(self):
        self.kata_Encryp    = Label(self.root, text="Encrypt Kata",font=("MS Serif",40),bg="ivory3")
        self.kata_1         = Label(self.root,text="Masukan kata yang ingin diamankan",bg="ivory3")
        self.inputUSer      = Text(self.root,width=80, height=10)
        self.kata_2         = Label(self.root,text="Hasil",bg="ivory3")
        self.Hasil          = Text(self.root,width=80, height=10)
        
        self.draw()

    def draw(self):
        self.inputUSer.focus()
        self.root.after(5000,self.update)
        self.kata_Encryp.place(relx=0.5,y=40,anchor=CENTER)
        self.kata_1.place(relx=0.5,y=120,anchor=CENTER)
        self.inputUSer.place(relx=0.5,y=220,anchor=CENTER)
        self.kata_2.place(relx=0.5,y=330,anchor=CENTER)
        self.Hasil.place(relx=0.5,y=450,anchor=CENTER)



if __name__ == "__main__":
    Encryp_kata()