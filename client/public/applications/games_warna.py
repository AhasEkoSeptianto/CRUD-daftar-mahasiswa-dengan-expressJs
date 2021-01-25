from tkinter import *
import random

class games:

    def __init__(self,master):
        self.master = master
        self.master.title("Games tebak warna")
        self.master.geometry("600x500")
        self.master.configure(bg='gray')
        self.skornow = 0
        self.var()


    def var(self):
        # var warna
        self.warna = ['red','black','green','purple','yellow','orange','pink','white']
        self.warnarandom = random.choice(self.warna)
        self.textrandom = random.choice(self.warna)
        self.main()

    def jawab(self):

        jwb = self.answer.get()
        if jwb == self.warnarandom :
            self.textchat.configure(text='')
            self.textchat.configure(text='Benar skor ditambah 1')
            self.skornow = self.skornow + 1
            self.skor.configure(text='Skor = ' + str(self.skornow))
            self.lblText.configure(text='')
            self.warnarandom = random.choice(self.warna)
            self.textrandom = random.choice(self.warna)
            
        else :
            self.textchat.configure(text='')
            self.textchat.configure(text='Salah skor dikurang 1')
            self.skornow = self.skornow - 1
            self.skor.configure(text='Skor = ' + str(self.skornow))
            self.lblText.configure(text='')
            self.warnarandom = random.choice(self.warna)
            self.textrandom = random.choice(self.warna)
        
        self.main()
            

    def main(self):

        self.lbl            = Label(self.master,text="Games Tebak Warna",bg='gray',fg='white')
        self.lblText        = Label(self.master,text=self.textrandom,fg=self.warnarandom,font=(None,60),bg='gray')
        self.lblTextJawab   = Label(self.master, text="Jawab dalam bahasa inggris",bg='gray',fg='white')
        self.answer         = Entry(self.master,)
        self.btn            = Button(self.master, text='Jawab',command=lambda : self.jawab())
        self.textchat       = Label(self.master,text='',bg='gray',fg='white')
        self.skor           = Label(self.master,text='Skor = ' + str(self.skornow),bg='gray',fg='white')
        self.position()

    def position(self):
        self.lbl.place(relx=0.5, rely=0.1, anchor=CENTER)
        self.lblText.place(relx=0.5, rely=0.3, anchor=CENTER)
        self.lblTextJawab.place(relx=0.5, rely=0.5, anchor=CENTER)
        self.answer.place(relx=0.5, rely=0.6, anchor=CENTER)
        self.btn.place(relx=0.5, rely=0.7, anchor= CENTER)
        self.textchat.place(relx=0.5,rely=0.8,anchor=CENTER)
        self.skor.place(relx=0.5,rely=0.9,anchor=CENTER)


root = Tk()
games(root)
root.mainloop()
    