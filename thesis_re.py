from PyQt5 import QtCore, QtGui, QtWidgets

# Bob's
from PyQt5.QtWidgets import QLabel, QMessageBox
import pandas as pd
import os
import urllib.request
import ast

img_cache_path = 'img_cache/'

pd.set_option('display.max_columns', 500)
pd.set_option('display.width', 1500)

class Label(QLabel):
    def __init__(self, *args, **kwargs):
        QLabel.__init__(self, *args, **kwargs)
        self.recipe = 'NA'
        self.image = 'NA' 
        self.image_URL = 'NA'
        self.ingredients = 'NA'
        self.directions = "NA"
        self.most_similar = "NA"

    def enterEvent(self, event):
        # print(f"{img_cache_path}blank.jpg")
        self.setStyleSheet('color: red')
        ui.directions_ingredients_label.setText(f"{self.ingredients}\n{self.directions}")
        if self.image == "NA":
            self.image = 'blank.jpg'
        # print(f"hovered: {self.recipe} image = {self.image}")
        if not os.path.exists(f'img_cache/{self.image}'):
            ui.image_label.setPixmap(QtGui.QPixmap(f"{img_cache_path}blank.jpg"))
            urllib.request.urlretrieve(self.image_URL, f"{img_cache_path}{self.image}")

        ui.image_label.setPixmap(QtGui.QPixmap(f"{img_cache_path}{self.image}"))

    def leaveEvent(self, event):
        # print(f"left: {self.recipe}")
        self.setStyleSheet('color: black')

    def mouseDoubleClickEvent(self, QMouseEvent):
        print('Double-clicked! Now that we have the GUI, all we have to do is provide the top 10 that are closely related to this recipe.')
        msg = QMessageBox()
        msg.setText("Do you want to see the top ten recommendations?")
        msg.setWindowTitle('Recommendations?')
        msg.setStandardButtons(QMessageBox.Yes | QMessageBox.No)
        reply = msg.exec()
        if reply == QMessageBox.Yes:
            ui.recipe_6.show()
            ui.recipe_7.show()
            ui.recipe_8.show()
            ui.recipe_9.show()
            ui.recipe_10.show()
            print('do it!')
            self.temp_most_similar = self.most_similar
            print(f"The most simliar to {self.recipe} is {self.temp_most_similar}. The first is {ui.df.title[self.temp_most_similar[0]]}")
            ui.recipe_1.setInformation(ui.df.title[self.temp_most_similar[0]], ui.df.image[self.temp_most_similar[0]], ui.df.ingredients[self.temp_most_similar[0]], ui.df.directions[self.temp_most_similar[0]], ui.df.most_similar[self.temp_most_similar[0]])
            ui.recipe_2.setInformation(ui.df.title[self.temp_most_similar[1]], ui.df.image[self.temp_most_similar[1]], ui.df.ingredients[self.temp_most_similar[1]], ui.df.directions[self.temp_most_similar[1]], ui.df.most_similar[self.temp_most_similar[1]])
            ui.recipe_3.setInformation(ui.df.title[self.temp_most_similar[2]], ui.df.image[self.temp_most_similar[2]], ui.df.ingredients[self.temp_most_similar[2]], ui.df.directions[self.temp_most_similar[2]], ui.df.most_similar[self.temp_most_similar[2]])
            ui.recipe_4.setInformation(ui.df.title[self.temp_most_similar[3]], ui.df.image[self.temp_most_similar[3]], ui.df.ingredients[self.temp_most_similar[3]], ui.df.directions[self.temp_most_similar[3]], ui.df.most_similar[self.temp_most_similar[3]])
            ui.recipe_5.setInformation(ui.df.title[self.temp_most_similar[4]], ui.df.image[self.temp_most_similar[4]], ui.df.ingredients[self.temp_most_similar[4]], ui.df.directions[self.temp_most_similar[4]], ui.df.most_similar[self.temp_most_similar[4]])
            ui.recipe_6.setInformation(ui.df.title[self.temp_most_similar[5]], ui.df.image[self.temp_most_similar[5]], ui.df.ingredients[self.temp_most_similar[5]], ui.df.directions[self.temp_most_similar[5]], ui.df.most_similar[self.temp_most_similar[5]])
            ui.recipe_7.setInformation(ui.df.title[self.temp_most_similar[6]], ui.df.image[self.temp_most_similar[6]], ui.df.ingredients[self.temp_most_similar[6]], ui.df.directions[self.temp_most_similar[6]], ui.df.most_similar[self.temp_most_similar[6]])
            ui.recipe_8.setInformation(ui.df.title[self.temp_most_similar[7]], ui.df.image[self.temp_most_similar[7]], ui.df.ingredients[self.temp_most_similar[7]], ui.df.directions[self.temp_most_similar[7]], ui.df.most_similar[self.temp_most_similar[7]])
            ui.recipe_9.setInformation(ui.df.title[self.temp_most_similar[8]], ui.df.image[self.temp_most_similar[8]], ui.df.ingredients[self.temp_most_similar[8]], ui.df.directions[self.temp_most_similar[8]], ui.df.most_similar[self.temp_most_similar[8]])
            ui.recipe_10.setInformation(ui.df.title[self.temp_most_similar[9]], ui.df.image[self.temp_most_similar[9]], ui.df.ingredients[self.temp_most_similar[9]], ui.df.directions[self.temp_most_similar[9]], ui.df.most_similar[self.temp_most_similar[9]])

    def setInformation(self, information, image, ingredients, directions, most_similar):
        # print(f"image = {image} type(image) = {type(image)}")
        self.recipe = information

        # Converting string representation of list to list
        ingredients = ast.literal_eval(ingredients)
        s = 'Ingredients:\n'
        for i in ingredients:
            s += f"∙ {i}\n"
        self.ingredients = s  # ingredients

        # Converting string representation of list to list
        directions = ast.literal_eval(directions)
        s = 'Directions:\n'
        for (i,d) in enumerate(directions):
            s += f"{i+1}. {d}\n"
        self.directions = s  # directions

        most_similar = ast.literal_eval(most_similar)
        self.most_similar = most_similar

        self.image_URL = image
        if isinstance(image, str):
            # print('the type is a str')
            image = image[image.rfind('/')+1:]
            self.image = image
        else:
            # print('the type is NOT a str')
            self.image = 'NA'
        self.setText(information)


class Ui_MainWindow(object):
    def setupUi(self, MainWindow):
        MainWindow.setObjectName("MainWindow")
        MainWindow.resize(902, 783)
        self.centralwidget = QtWidgets.QWidget(MainWindow)
        self.centralwidget.setObjectName("centralwidget")
        self.label = Label(self.centralwidget)
        self.label.setGeometry(QtCore.QRect(260, 10, 351, 31))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.label.setFont(font)
        self.label.setObjectName("label")
        self.image_label = Label(self.centralwidget)
        self.image_label.setGeometry(QtCore.QRect(340, 110, 561, 321))
        self.image_label.setText("")
        self.image_label.setPixmap(QtGui.QPixmap(f"{img_cache_path}blank.jpg"))
        self.image_label.setScaledContents(True)
        self.image_label.setWordWrap(False)
        self.image_label.setObjectName("image_label")
        self.recipe_1 = Label(self.centralwidget)
        self.recipe_1.setGeometry(QtCore.QRect(20, 70, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_1.setFont(font)
        self.recipe_1.setObjectName("recipe_1")
        self.recipe_2 = Label(self.centralwidget)
        self.recipe_2.setGeometry(QtCore.QRect(20, 100, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_2.setFont(font)
        self.recipe_2.setObjectName("recipe_2")
        self.recipe_3 = Label(self.centralwidget)
        self.recipe_3.setGeometry(QtCore.QRect(20, 130, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_3.setFont(font)
        self.recipe_3.setObjectName("recipe_3")
        self.recipe_4 = Label(self.centralwidget)
        self.recipe_4.setGeometry(QtCore.QRect(20, 160, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_4.setFont(font)
        self.recipe_4.setObjectName("recipe_4")
        self.recipe_5 = Label(self.centralwidget)
        self.recipe_5.setGeometry(QtCore.QRect(20, 190, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_5.setFont(font)
        self.recipe_5.setObjectName("recipe_5")
        self.recipe_7 = Label(self.centralwidget)
        self.recipe_7.setGeometry(QtCore.QRect(20, 250, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_7.setFont(font)
        self.recipe_7.setObjectName("recipe_7")
        self.recipe_6 = Label(self.centralwidget)
        self.recipe_6.setGeometry(QtCore.QRect(20, 220, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_6.setFont(font)
        self.recipe_6.setObjectName("recipe_6")
        self.recipe_8 = Label(self.centralwidget)
        self.recipe_8.setGeometry(QtCore.QRect(20, 280, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_8.setFont(font)
        self.recipe_8.setObjectName("recipe_8")
        self.recipe_10 = Label(self.centralwidget)
        self.recipe_10.setGeometry(QtCore.QRect(20, 340, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_10.setFont(font)
        self.recipe_10.setObjectName("recipe_10")
        self.recipe_9 = Label(self.centralwidget)
        self.recipe_9.setGeometry(QtCore.QRect(20, 310, 301, 21))
        font = QtGui.QFont()
        font.setPointSize(18)
        self.recipe_9.setFont(font)
        self.recipe_9.setObjectName("recipe_9")
        self.directions_ingredients_label = QtWidgets.QLabel(self.centralwidget)
        self.directions_ingredients_label.setGeometry(QtCore.QRect(340, 430, 561, 311))
        self.directions_ingredients_label.setObjectName("directions_ingredients_label")
        MainWindow.setCentralWidget(self.centralwidget)
        self.menubar = QtWidgets.QMenuBar(MainWindow)
        self.menubar.setGeometry(QtCore.QRect(0, 0, 902, 22))
        self.menubar.setObjectName("menubar")
        self.menuFile = QtWidgets.QMenu(self.menubar)
        self.menuFile.setObjectName("menuFile")
        MainWindow.setMenuBar(self.menubar)
        self.statusbar = QtWidgets.QStatusBar(MainWindow)
        self.statusbar.setObjectName("statusbar")
        MainWindow.setStatusBar(self.statusbar)
        self.menubar.addAction(self.menuFile.menuAction())
        # self.menubar.setNativeMenuBar(False)
        # self.menubar.addAction(menu->menuAction());

        self.retranslateUi(MainWindow)
        QtCore.QMetaObject.connectSlotsByName(MainWindow)

        self.df1 = pd.read_csv('dessert_recipes.csv', index_col=0)
        # print(self.df)
        self.df = self.df1.loc[self.df1['type'] == 'main']
        # self.df.sort_values(by=['ratings'], inplace=True, ascending=False)
        # head = self.df.head(10)
        # print(f"type(df) = {type(self.df)}\n{self.df.describe()}")
        # print(f"\n\nAfter sorting: {type(head)}\n{head.describe()}\n head = {head}")
        # print(f"The first one in head: \n{head.title.iloc[0]}")
        # exit()
        self.recipe_1.setInformation(self.df.title.iloc[0], self.df.image.iloc[0], self.df.ingredients.iloc[0], self.df.directions.iloc[0], self.df.most_similar.iloc[0])
        self.recipe_2.setInformation(self.df.title.iloc[1], self.df.image.iloc[1], self.df.ingredients.iloc[1], self.df.directions.iloc[1], self.df.most_similar.iloc[1])
        self.recipe_3.setInformation(self.df.title.iloc[2], self.df.image.iloc[2], self.df.ingredients.iloc[2], self.df.directions.iloc[2], self.df.most_similar.iloc[2])
        self.recipe_4.setInformation(self.df.title.iloc[3], self.df.image.iloc[3], self.df.ingredients.iloc[3], self.df.directions.iloc[3], self.df.most_similar.iloc[3])
        self.recipe_5.setInformation(self.df.title.iloc[4], self.df.image.iloc[4], self.df.ingredients.iloc[4], self.df.directions.iloc[4], self.df.most_similar.iloc[4])
        self.recipe_6.hide()
        self.recipe_7.hide()
        self.recipe_8.hide()
        self.recipe_9.hide()
        self.recipe_10.hide()

        self.df = self.df1

    def retranslateUi(self, MainWindow):
        _translate = QtCore.QCoreApplication.translate
        MainWindow.setWindowTitle(_translate("MainWindow", "MainWindow"))
        self.label.setText(_translate("MainWindow", "Content-based Recommendation Engine"))
        self.recipe_1.setText(_translate("MainWindow", "recipe_1"))
        self.recipe_2.setText(_translate("MainWindow", "recipe_2"))
        self.recipe_3.setText(_translate("MainWindow", "recipe_3"))
        self.recipe_4.setText(_translate("MainWindow", "recipe_4"))
        self.recipe_5.setText(_translate("MainWindow", "recipe_5"))
        self.recipe_6.setText(_translate("MainWindow", "recipe_6"))
        self.recipe_7.setText(_translate("MainWindow", "recipe_7"))
        self.recipe_8.setText(_translate("MainWindow", "recipe_8"))
        self.recipe_9.setText(_translate("MainWindow", "recipe_9"))
        self.recipe_10.setText(_translate("MainWindow", "recipe_10"))
        self.menuFile.setTitle(_translate("MainWindow", "File"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    MainWindow = QtWidgets.QMainWindow()
    ui = Ui_MainWindow()
    ui.setupUi(MainWindow)
    ui.directions_ingredients_label.setText('hi')
    MainWindow.show()
    sys.exit(app.exec_())
