<?php

function titularComLetrasMaiusculas(array &$conta)
{
    $conta['titular'] = strtoupper($conta['titular']);
}

function exibeConta(array $conta)
{
    ['titular' => $titular, 'saldo' => $saldo] = $conta;
    echo "<li>Titular: $titular. Saldo: $saldo</li>";
}