<?php

require_once __DIR__ . '/vendor/amocrm.phar';

try {

			// Создание клиента
			$subdomain = 'neotek';																			// Поддомен в амо срм
			$login     = '8293519@bk.ru';																// Логин в амо срм
			$apikey    = 'ac722532d8a30cc07ced1d5b789166f96c8f175f';		// api ключ

			$amo = new \AmoCRM\Client($subdomain, $login, $apikey);

			// Вывести полученые из амо данные
			// echo '<pre>';
			// print_r($amo->account->apiCurrent());
			// echo '</pre>';

			// создаем лида
			$lead = $amo->lead;
			// Добавление инфы в поле "Источник", в данном случае попадает имя домена
			$lead->addCustomField(681047, [
					[$_SERVER['HTTP_HOST']],
			]);

			$id = $lead->apiAdd();

			// Получение экземпляра модели для работы с контактами
			$contact = $amo->contact;

			// Заполнение полей модели
			$contact['name'] = isset($_POST['name']) ? $_POST['name'] : 'Не указано';
			$contact['linked_leads_id'] = [(int)$id];


			$contact->addCustomField(613635, [
					[$_POST['phone'], 'MOB'],
			]);

			$contact->addCustomField(613637, [
					[$_POST['email'], 'PRIV'],
			]);

			// Добавление нового контакта и получение его ID
			$id = $contact->apiAdd();

} catch (\AmoCRM\Exception $e) {
		printf('Error (%d): %s' . PHP_EOL, $e->getCode(), $e->getMessage());
}


?>