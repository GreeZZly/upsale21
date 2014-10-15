<div id="error_block"><?php echo validation_errors(); ?></div>
<form class="form-horizontal" id="reg_form" action="main/order" method="POST">
		         
		            <div class="input_form">
		                <input type="text" id="name" placeholder="Введите Ваше имя" name="name">
		            </div>

		           <div class="input_form">
		                <input type="text" id="Family" placeholder="Введите Вашу Фамилию" name="surname">
		            </div>

		            <div class="input_form">
		               <input type="text" id="email" placeholder="Введите Ваш e-mail" name="email">
		            </div>
		

		             <div class="input_form">
		               <input type="text" id="phone" placeholder="Введите Ваш номер телефон" name="phone">
		            </div>
		       
		        
		            <div class="input_form">
		              <button type="submit" class="btn-danger" id="reg_button_last">ЗАРЕГИСТРИРОВАТЬСЯ</button>
		            </div>
		         
		        </form>