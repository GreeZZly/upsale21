<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

class Main extends CI_Controller { 
	function __construct()
	{
		parent:: __construct();
		$this->load->library('session');
		$this->load->helper('url');
		$this->load->helper('form');
		$this->load->library('ion_auth');
		$this->load->helper('cookie');
		// $id_registred_company = 12;

	}

	public function	index(){
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');

		$this->load->view('mel/htmlheader.html');
		$this->load->view('mel/index');
		$this->load->view('mel/htmlfooter.html');

}

	public function order(){
		// $this->load->model('heroin');
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->library('email');
		
		$this->form_validation->set_rules('name', 'Имя', 'required|min_length[2]|max_length[16]');
		$this->form_validation->set_rules('surname', 'Фамилия', 'required|min_length[2]|max_length[20]');
		$this->form_validation->set_rules('email', 'Email', 'required|valid_email');
		$this->form_validation->set_rules('phone', 'Телефон', 'required|numeric');

		if ($this->form_validation->run() == FALSE)
		{
			$this->load->view('mel/htmlheader.html');
			$this->load->view('mel/form_php');
			$this->load->view('mel/htmlfooter.html');
		}
		else
		{
			$data = array('name' => $this->input->post('name'),
							'surname' => $this->input->post('surname'),
							'type' => 'individual',
							'email' => $this->input->post('email'),
							'phone' => $this->input->post('phone')
				);
			// $data['type']='individual';
			// $data['captured']=1;
		   	// $this->heroin->setCustomer(null,$data);
			$config['mailtype'] = 'text';
			// $config['mailpath'] = '/usr/sbin/sendmail';
			// $config['charset'] = 'iso-8859-1';
			// $config['wordwrap'] = FALSE;
			// $config['newline'] = TRUE;

			$this->load->library('apiforcrm');
			// $order = array('customer' => $data, 'order'=>array('description'=>json_encode(array($data['order']))), 'reg' => false, 'phase'=>'cart' );
			$answer  = $this->apiforcrm->setApi('17df5bc74d8799b4c676094a7286a5519cd02a0a')->setCaptured($data);

			$this->email->initialize($config);

			$this->email->clear();
		    $this->email->to('melnichenco70@mail.ru, semenzuev777@gmail.com');
		    $this->email->from('info@upsale21.ru');
		    $this->email->subject('Новая заявка!');
		    $this->email->message("Привет!\nПоступила заявка от\nИмя: ".$data['name']."\nФамилия: ".$data['surname']."\nАдрес: ".$data['email']."\nТелефон: ".$data['phone']."");
		    $this->email->send();
		   

			$this->load->view('mel/htmlheader.html');
			$this->load->view('mel/formsuccess');
			$this->load->view('mel/htmlfooter.html');
		}
		
	}
	public function first_order(){
		$name= $this->input->post('name1');
		$email= $this->input->post('email1');
		$phone= $this->input->post('phone1');
		$config['mailtype'] = 'text';
		$this->email->initialize($config);

		$this->email->clear();
	    $this->email->to('melnichenco70@mail.ru, semenzuev777@gmail.com');
	    $this->email->from('info@upsale21.ru');
	    $this->email->subject('Зарегистрировались!');
	    $this->email->message("Привет!\nЗарегался:\nИмя: ".$name."\nАдрес: ".$email."\nТелефон: ".$phone."");
	    $this->email->send();
	    redirect('/', 'refresh');
	}
	public function download_test(){
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->library('email');
		
		$this->form_validation->set_rules('name_d', 'Имя', 'required|min_length[2]|max_length[16]');
		$this->form_validation->set_rules('email_d', 'Email', 'required|valid_email');
		if ($this->form_validation->run() == FALSE)
		{
			$this->load->view('mel/htmlheader.html');
			$this->load->view('mel/download_form_php');
			$this->load->view('mel/htmlfooter.html');
		}
		else {
			$data = array('name' => $this->input->post('name_d'),
							'email' => $this->input->post('email_d')
				);
			$config['mailtype'] = 'text';
			$this->email->initialize($config);

			$this->email->clear();
		    $this->email->to('melnichenco70@mail.ru, semenzuev777@gmail.com');
		    $this->email->from('info@upsale21.ru');
		    $this->email->subject('Скачали тест!');
		    $this->email->message("Привет!\nТест скачал:\nИмя: ".$data['name']."\nАдрес: ".$data['email']."");
		    $this->email->send();
		   	
		   	$this->email->clear();
		    $this->email->to($data['email']);
		    $this->email->from('info@upsale21.ru');
		    $this->email->subject('Оценочный тест!');
		    $this->email->message("Добрый день, ".$data['name']."\nБлагодарим вас за скачивание нашего оценочного теста.\nФайл прикреплен к письму.");
		    $this->email->attach('include/files/test.docx');
		    $this->email->send();
		    // echo $this->email->print_debugger();
			$this->load->view('mel/htmlheader.html');
			$this->load->view('mel/formsuccess_download');
			$this->load->view('mel/htmlfooter.html');
		}
	}

	function phone_order(){
		$this->load->helper(array('form', 'url'));
		$this->load->library('form_validation');
		$this->load->library('email');

		$this->form_validation->set_rules('name_p', 'Имя', 'required|min_length[2]|max_length[16]');
		$this->form_validation->set_rules('surname_p', 'Фамилия', 'min_length[2]|max_length[20]');
		$this->form_validation->set_rules('phone_p', 'Телефон', 'required|numeric');
		if ($this->form_validation->run() == FALSE)
		{
			$this->load->view('mel/htmlheader.html');
			$this->load->view('mel/phone_order_php');
			$this->load->view('mel/htmlfooter.html');
		}
		else {
			$data = array('name' => $this->input->post('name_p'),
							'surname' =>$this->input->post('surname_p'),
							'phone' => $this->input->post('phone_p')
				);
			$config['mailtype'] = 'text';
			$this->email->initialize($config);

			$this->email->clear();
		    $this->email->to('melnichenco70@mail.ru, semenzuev777@gmail.com');
		    $this->email->from('info@upsale21.ru');
		    $this->email->subject('Заказали звонок!!');
		    $this->email->message("Привет!\nЗвонок заказал:\nИмя: ".$data['name']." ".$data['surname']."\nТелефон: ".$data['phone']."");
		    $this->email->send();
		   	}

		   	$this->load->view('mel/htmlheader.html');
			$this->load->view('mel/formsuccess_phone');
			$this->load->view('mel/htmlfooter.html');
	}

}